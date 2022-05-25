// import axios from 'axios'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import router from '@/router'
import drf from '@/api/drf'

Vue.use(Vuex)
// const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
// const URL_BASE = 'https://api.themoviedb.org/3'
// const params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}

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

    // isAuthor: (state, getters) => {
    //   return state.article.user?.username === getters.currentUser.username
    // },
    // isArticle: state => !_.isEmpty(state.article),
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
        router.push({
          name: 'article',
          params: { articlePk: getters.article.pk }
        })
      })
    },
    fetchArticle({ commit, getters }, articlePk) {
      // article detail 받아오기 (read)
      axios({
        url: drf.communities.article(articlePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('GET_ARTICLE', res.data))
        .catch(err => console.error(err.response))
    },
  }
}