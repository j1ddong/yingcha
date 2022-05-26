import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import router from '@/router'
import drf from '@/api/drf'

Vue.use(Vuex)


export default {
  state: {
    keywords: '',
    foods: '',
    articles: [],
    article: {},
  },
  getters: {
    keywords: state => state.keywords,
    foods: state => state.foods,
    articles: state => state.articles,
    article: state => state.article,
    isArticle: state => !_.isEmpty(state.article),
    isAuthor: (state, getters) => {
      return state.article.user?.username === getters.currentUser.username
    },
  },
  mutations: {
    GET_KEYWORD: (state, keywords) => state.keywords = keywords,
    GET_FOOD: (state, foods) => state.foods = foods,
    GET_ARTICLES: (state, articles) => state.articles = articles,
    GET_ARTICLE: (state, article) => state.article = article,


    // SET_ARTICLE_COMMENTS: (state, comments) => (state.article.comments = comments),
  },
  actions: {
    searchKeyword({commit, getters}, keywords) {
      // 검색창, article create 페이지에서 영화 검색
      //console.log('before axios') //이것도 ok
      // console.log(keyword) //여기로 keyword가 안넘어 온다.
      axios({
        url: drf.communities.search(keywords),
        method: 'get',
        headers: getters.authHeader
      })
        // 여기에서 문제가 생김 ; keyword에 아무 것도 안넘어옴
      .then(res => {
        // console.log(res.data) // 휴 해결함
        commit('GET_KEYWORD', res.data)
      })
    },
    searchFood({commit, getters}, foods) {
      // 검색창, article create 페이지에서 영화 검색
      axios({
        url: drf.communities.searchFood(foods),
        method: 'get',
        headers: getters.authHeader
      })
      .then(res =>{
        // console.log(foods)
        commit('GET_FOOD', res.data)
      })
    },
    createArticle({ commit, getters }, article) {
      // 게시글 생성 (create)
      axios({
        url: drf.communities.articles(),
        method: 'post',
        data: article,
        headers: getters.authHeader,
      })
      .then(res => {
        // console.log(res.data)
        commit('GET_ARTICLE', res.data)
        // console.log(getters.article.pk)
        router.push({
          name: 'ArticleDetail',
          params: {articlePk: getters.article.pk}
       })
      })
    },
    fetchArticle({ commit, getters, dispatch }, articlePk) {
      // article detail 받아오기 (read)
      // console.log(articlePk)
      axios({
        url: drf.communities.article(articlePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('GET_ARTICLE', res.data)
        })
        .then(() => {
          dispatch('getMovieTitle', getters.article.movie_id)
          dispatch('getFoodTitle', getters.article.food_id)
        })
        .catch(err => console.error(err.response))
    },
    updateArticle({ commit, getters }, { pk, title, content}) {
      // 게시글 수정
      axios({
        url: drf.communities.articleedit(pk),
        method: 'put',
        data: { title, content },
        headers: getters.authHeader,
      })
      .then(res => {
        commit('GET_ARTICLE', res.data)
        router.push({
          name: 'ArticleDetail',
          params: {articlePk: getters.article.pk}
       })
      })
    },
    deleteArticle({ commit, getters }, {articlePk, foodId}) {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.communities.delete(articlePk),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('DELETE_ARTICLE',)
          })
          .then(() => {
            router.push({ 
              name: 'FoodDetailView',
              params : {foodPk: foodId}
            })
          })
          .catch(err => console.error(err.response))
      }
    },
  }
}