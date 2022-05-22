import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import drf from '@/api/drf'

Vue.use(Vuex)
const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/original'


export default {
  state: {
    movieDetail: {
      title: null, posterUrl: null, overview: null, release_date: null, genres: [], original_title: null
    },
    movieProvider: [],
    movieDirector: null,
    movieActors: [],
    relatedMovies: []
  },
  getters: {
    movieDetail: state => state.movieDetail,
    movieProvider: state => state.movieProvider,
    movieDirector: state => state.movieDirector,
    movieActors: state => state.movieActors,
    relatedMovies: state => state.relatedMovies
  },
  mutations: {
    GET_MOVIE_DETAIL ({ movieDetail }, movie) {
      movieDetail.title = movie.title,
      movieDetail.posterUrl = BASIC_URL_FOR_IMAGE + movie.poster_path,
      movieDetail.overview = movie.overview,
      movieDetail.release_date = movie.release_date
      movieDetail.genres = movie.genres.map(genre => genre.name) 
      movieDetail.original_title = movie.original_title
    },
    GET_MOVIE_PROVIDER (state, providers) {
      state.movieProvider = providers.map(provider => provider.provider_name)
    },
    GET_MOVIE_CREDITS (state, crews) {
      const director = crews.crew.find(crew => {
        return crew.known_for_department === 'Directing'
      })
      state.movieDirector = director.id
      state.movieActors = crews.cast.splice(0,5).map(crew => {
        return crew.id
      })
    },
    GET_RELATED_NAME ( state, relatedMovies) {
      state.relatedMovies = relatedMovies.splice(0,10).map(movie => {
        return movie.id
      })
    }
  },
  actions: {
    fetchMovieDetail ({ commit }, moviePk) {
      axios.get(URL_BASE + `/movie/${moviePk}`, {params: {'api_key': API_KEY, 'language': 'ko' }})
        .then(res => {
          commit('GET_MOVIE_DETAIL', res.data)
        })
    },
    fetchMovieProvider ({ commit }, moviePk) {
      axios.get(URL_BASE + `/movie/${moviePk}/watch/providers`, {params: {'api_key': API_KEY}})
        .then(res => {
          commit('GET_MOVIE_PROVIDER', res.data.results.KR.rent)
        })
    },
    fetchMovieCredits ({ commit }, moviePk) {          
      axios.get(URL_BASE + `/movie/${moviePk}/credits`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        commit('GET_MOVIE_CREDITS', res.data)
      })
    },
    fetchRelatedName ({commit}, moviePk ) {
      axios.get(URL_BASE + `/movie/${moviePk}/similar`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        commit('GET_RELATED_NAME', res.data.results)
      })
    }
  },
}