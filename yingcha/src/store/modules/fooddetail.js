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
    movieTitle: '',
    foodTitle: '',
    foodArticles : [],
    recommendMovie: [],
  },
  getters: {
    movieTitle: state => state.movieTitle,
    foodTitle: state => state.foodTitle,
    foodArticles: state => state.foodArticles,
    recommendMovie: state => state.recommendMovie
    // isAuthor: (state, getters) => {
    //   return state.article.user?.username === getters.currentUser.username
    // },
    // isArticle: state => !_.isEmpty(state.article),
  },
  mutations: {
    GET_MOVIETITLE: (state, movieTitle) => state.movieTitle = movieTitle,
    GET_FOODTITLE: (state, foodTitle) => state.foodTitle = foodTitle,
    GET_FOODARTICLES: (state, foodArticles) => state.foodArticles = foodArticles,
    GET_RECOMMEND_MOVIE: (state, movies) => state.recommendMovie = movies
    // SET_ARTICLE_COMMENTS: (state, comments) => (state.article.comments = comments),
  },
  actions: {
    getMovieTitle({commit, getters}, moviePk) {
      // 영화 제목 가져오기(article detail page)
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
      // 음식 제목 가져오기(article detail page)
      // console.log('ok') //ok
      axios({
        url: drf.communities.foodtitle(foodPk),
        method: 'get',
        headers: getters.authHeader
      })
      .then(res => {
        commit('GET_FOODTITLE', res.data)
      })
    },
    fetchFoodArticle({ commit, getters }, foodPk) {
      // console.log('fetchfoodarticle') // ok
      // food와 연결된 article list 가져오기
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
    fetchRecommendMovie({ commit, getters }, foodPk) {
      axios({
        url: drf.communities.foodRecommend(foodPk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('GET_RECOMMEND_MOVIE', res.data)
        })
    }
  }
}