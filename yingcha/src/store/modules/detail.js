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
    movieDetail: {
      title: null, posterUrl: null, description: null, release_date: null, 
      genres: [], original_title: null, providers: [], directorId: null, director: null
    },
    movieDirectorUrl: null,
    movieActors: [],
    relatedMovies: [],
    reviews: []
  },
  getters: {
    movieDetail: state => state.movieDetail,
    movieActors: state => state.movieActors,
    relatedMovies: state => state.relatedMovies,
    movieDirectorUrl: state => state.movieDirectorUrl,
    reviews: state => state.reviews
  },
  mutations: {
    GET_MOVIE_DETAIL ({ movieDetail }, movie) {
      console.log(movie.title)
      movieDetail.title = movie.title
      movieDetail.description = movie.description
      movieDetail.release_date = movie.release_date
      movieDetail.genres = movie.genres.map(genre => genre.name)
      movieDetail.original_title = movie.original_title
      movieDetail.providers = movie.providers.map(provider => provider.name)
      movieDetail.director = movie.directors[0].name
      movieDetail.directorId = movie.directors[0].id
      movieDetail.posterUrl = BASIC_URL_FOR_IMAGE + movie.poster_url
    },
    GET_MOVIE_CREDITS (state, crews) {
      state.movieActors = crews.cast.splice(0,5).map(crew => {
        return crew.id
      })
    },
    GET_RELATED_NAME (state, relatedMovies) {
      state.relatedMovies = relatedMovies.splice(0,10).map(movie => {
        return movie.id
      })
    },
    GET_MOVIE_DIRECTOR (state, director) {
      state.movieDirector = director 
    },
    GET_MOVIE_DIRECTOR_URL (state, url) {
      state.movieDirectorUrl = BASIC_URL_FOR_IMAGE + url
    },
    GET_REVIEWS (state, reviews) {
      state.reviews = reviews
    },
    SET_MOVIE_REVIEWS: (state, reviews) => (state.reviews = reviews),
  },
  actions: {
    fetchMovieDetail ({ commit, getters, dispatch }, moviePk) {
      axios({
        method: 'get',
        url: drf.movies.movie(moviePk),
        headers: getters.authHeader,
      })
        .then(res => {
          console.log(res.data)
          commit('GET_MOVIE_DETAIL', res.data)
        })
        .then(() => {
          dispatch('fetchDirectorUrl')
       })
    },
    // fetchMovieCredits ({ commit }, moviePk) {          
    //   axios.get(URL_BASE + `/movie/${moviePk}/credits`, {params: {'api_key': API_KEY, 'language': 'ko'}})
    //   .then(res => {
    //     commit('GET_MOVIE_CREDITS', res.data)
    //   })
    // },
    fetchRelatedName ({ commit }, moviePk) {
      axios.get(URL_BASE + `/movie/${moviePk}/similar`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        commit('GET_RELATED_NAME', res.data.results)
      })
    },
    fetchDirectorUrl ({commit, getters}) {
      axios.get(URL_BASE + `/person/${getters.movieDetail.directorId}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        commit('GET_MOVIE_DIRECTOR_URL', res.data.profile_path)
      })
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
  },
}