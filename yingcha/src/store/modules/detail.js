import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import drf from '@/api/drf'
import router from '@/router'

Vue.use(Vuex)
const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/w200'


export default {
  state: {
    movieDetail: [],
    movieDirectorUrl: null,
    movieActors: [],
    relatedMovies: [],
    reviews: []
  },
  getters: {
    movieDetail: state => state.movieDetail,
    movieDirector: state => state.movieDirector,
    movieActors: state => state.movieActors,
    relatedMovies: state => state.relatedMovies,
    movieDirectorUrl: state => state.movieDirectorUrl,
    reviews: state => state.reviews
  },
  mutations: {
    GET_MOVIE_DETAIL (state, movie) {
      state.movieDetail = movie
    },
    GET_RELATED_NAME (state, relatedMovies) {
      state.relatedMovies = relatedMovies.map(movie => {
        return movie.id
      })
    },
    GET_MOVIE_DIRECTOR_URL (state, url) {
      state.movieDirectorUrl = BASIC_URL_FOR_IMAGE + url
    },
    GET_REVIEWS (state, reviews) {
      state.reviews = reviews
    },
    SET_MOVIE_REVIEWS: (state, reviews) => (state.reviews = reviews),
    GET_MOVIE_ACTORS: (state, actors) => (state.movieActors = actors)
  },
  actions: {
    fetchMovieDetail ({commit, getters, dispatch}, moviePk) {
      axios({
        method: 'get',
        url: drf.movies.movie(moviePk),
        headers: getters.authHeader,
      })
        .then(res => {
          commit('GET_MOVIE_DETAIL', res.data)
        })
        .then(() => {
          dispatch('fetchDirectorUrl')
          dispatch('fetchActorUrl')
          // console.log(getters.movieDetail.actors)
          })
    },
    fetchDirectorUrl ({commit, getters}) {
      axios.get(URL_BASE + `/person/${getters.movieDetail.directors[0].id}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        commit('GET_MOVIE_DIRECTOR_URL', res.data.profile_path)
      })
    },
    fetchRelatedName ({ getters, commit }, moviePk) {
      axios({
        method: 'get',
        url: drf.movies.recommend(moviePk),
        headers: getters.authHeader,
      })
        .then(res => {
          commit('GET_RELATED_NAME', res.data)
        })
      // axios.get(URL_BASE + `/movie/${moviePk}/similar`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      // .then(res => {
      //   console.log(res.data.results)
      //   commit('GET_RELATED_NAME', res.data.results)
      // })
    },
    fetchActorUrl ({commit, getters}) {
      const actors = []
      getters.movieDetail.actors.forEach(actor => {
        axios.get(URL_BASE + `/person/${actor.id}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
          .then(res => {
            actors.push({name: actor.name, url: BASIC_URL_FOR_IMAGE + res.data.profile_path})
          })
      })
      commit('GET_MOVIE_ACTORS', actors)
    },
    fetchReviews ({commit, getters}, moviePk ) {
      axios({
        method: 'get',
        url: drf.movies.movieReviews(moviePk),
        headers: getters.authHeader,
      })
        .then(res => {
          commit('GET_REVIEWS', res.data.review_set)
        })
    },
    updateReview({ commit, getters }, { moviePk, reviewPk, content, voteAverage }) {
      const review = { content, vote_average: voteAverage}
      console.log(review)
      axios({
        url: drf.movies.review(moviePk, reviewPk),
        method: 'put',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_REVIEWS', res.data)
        })
        .catch(err => console.error(err.response))
    },
    deleteReview({ getters, commit}, { moviePk, reviewPk }) {
      if (confirm('정말 삭제하시겠습니까?')) {
          // const idx = state.reviews.findIndex(item => item.pk == reviewPk )
          // state.reviews.splice(idx, 1)
          axios({
            url: drf.movies.review(moviePk, reviewPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_MOVIE_REVIEWS', res.data)
              router.go(router.currentRoute)
            })
            .catch(err => console.error(err.response))
        }
    },
    likeReview({ commit, getters }, {moviePk, reviewPk}) {
      axios({
        url: drf.movies.likeReview(moviePk, reviewPk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_REVIEWS', res.data)})
        .catch(err => console.error(err.response))
    },
    createReview({ commit, getters }, { moviePk, content, voteAverage }) {
      const review = { content, vote_average: voteAverage }
      axios({
        url: drf.movies.reviews(moviePk),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_REVIEWS', res.data)
        })
        .catch(err => console.error(err.response))
    },
  }
}