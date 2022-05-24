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
    articles: [],
    foodArticles : [],
    article: {},
    keywords: '',
    foods: '',
    movieTitle: '',
    foodTitle: '',

  },
  getters: {
    articles: state => state.articles,
    foodArticles: state => state.foodArticles,
    article: state => state.article,
    keywords: state => state.keywords,
    foods: state => state.foods,
    movieTitle: state => state.movieTitle,
    foodTitle: state => state.foodTitle,

    // isAuthor: (state, getters) => {
    //   return state.article.user?.username === getters.currentUser.username
    // },
    // isArticle: state => !_.isEmpty(state.article),
  },
  mutations: {
    GET_ARTICLES: (state, articles) => state.articles = articles,
    GET_FOODARTICLES: (state, foodArticles) => state.foodArticles = foodArticles,
    GET_ARTICLE: (state, article) => state.article = article,
    GET_KEYWORD: (state, keywords) => state.keywords = keywords,
    GET_FOOD: (state, foods) => state.foods = foods,
    GET_MOVIETITLE: (state, movieTitle) => state.movieTitle = movieTitle,
    GET_FOODTITLE: (state, foodTitle) => state.foodTitle = foodTitle,


    // SET_ARTICLE_COMMENTS: (state, comments) => (state.article.comments = comments),
  },
  actions: {
    createArticle({ commit, getters }, article) {
      // console.log(111111)
      /* 게시글 생성
      POST: articles URL (게시글 입력정보, token)
        성공하면
          응답으로 받은 게시글을 state.article에 저장
          ArticleDetailView 로 이동
        실패하면
          에러 메시지 표시
      */
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
      /* 게시글 목록 받아오기
      GET: articles URL (token)
        성공하면
          응답으로 받은 게시글들을 state.articles에 저장
        실패하면
          에러 메시지 표시
      */
      axios({
        url: drf.communities.article(articlePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('GET_ARTICLE', res.data))
        .catch(err => console.error(err.response))
    },
    fetchFoodArticle({ commit, getters }, foodPk) {
      /* 단일 게시글 받아오기
      GET: article URL (token)
        성공하면
          응답으로 받은 게시글들을 state.articles에 저장
        실패하면
          단순 에러일 때는
            에러 메시지 표시
          404 에러일 때는
            NotFound404 로 이동
      */
      // console.log('fetchfoodarticle') // ok
      axios({
        url: drf.communities.food(foodPk),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => {
        // console.log('into then') //ok
        commit('GET_FOODARTICLES', res.data)
        // console.log(res.data) //ok
      })  
      .catch(err => {
        console.error(err.response)
        if (err.response.status === 404) {
          router.push({ name: 'NotFound404' })
        }
        })
    },
    searchKeyword({commit, getters}, keywords) {
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
    getMovieTitle({commit, getters}, moviePk) {
      axios({
        url: drf.communities.movietitle(moviePk),
        method: 'get',
        headers: getters.authHeader
      })
      .then(res => {
        commit('GET_MOVIETITLE', res.data)
      })
    },
    getFoodTitle({commit, getters}, foodPk) {
      // console.log('ok') //ok
      axios({
        url: drf.communities.foodtitle(foodPk),
        method: 'get',
        headers: getters.authHeader
      })
      .then(res => {
        commit('GET_FOODTITLE', res.data)
      })
    }
  }
}