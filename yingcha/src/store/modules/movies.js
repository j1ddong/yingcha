// import axios from 'axios'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import drf from '@/api/drf'

Vue.use(Vuex)
const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
// const params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}

export default {
  state: {
    boxoffices: [],
    popularmovies: [],
    bestmovies: [],
    genremovies: [],
  },
  getters: {
    boxoffices: state => state.boxoffices,
    bestmovies: state => state.bestmovies,
    popularmovies: state => state.popularmovies,
    genremovies: state => state.genremovies,

  },
  mutations: {
    GET_BOXOFFICE: (state, boxoffices) => state.boxoffices = boxoffices['results'].slice(0,10),
    GET_POPULARMOVIE: (state, popularmovies) => state.popularmovies = popularmovies,
    GET_BESTMOVIE: (state, bestmovies) => state.bestmovies = bestmovies['results'].slice(0,10),
    GET_GENREMOVIE: (state, genremovies) => state.genremovies = genremovies,

  },
  actions: {
    fetchBoxOffice: function ({commit}) {
      // console.log('mmovie')
      axios.get(URL_BASE + '/movie/now_playing', {params:
        {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
      })
      .then(res => {
        // console.log(res.data)
        commit('GET_BOXOFFICE', res.data)
        // console.log(typeof(state.boxoffices))
      })
    },
    fecthPopularMovie: function ({commit}) {
      // django와 통신하기 
      const koreaPopular = [282631, 567646, 397567, 313108, 299534, 330457, 346646, 19995, 1255, 124157, 158445, 291549, 420817, 133200, 45035, 518068, 437068, 11658, 396535, 33196, 242452, 299536, 19644, 99861, 496243, 157336, 109445]
      const popularRandom = _.sampleSize(koreaPopular, 10)
      let resultObject = []
      popularRandom.forEach(popularId => {
        axios.get(`${URL_BASE}/movie/${popularId}`, {params:
          {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
        })
        .then(res => {
          // console.log(typeof(res.data))
          resultObject.push(res.data)
        })
      });
      commit('GET_POPULARMOVIE', resultObject)
      // console.log(resultObject)
    },
    fetchBestMovie: function ({commit}) {
      axios.get(URL_BASE + '/movie/top_rated', {params:
        {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
      })
      .then(res => {
        // console.log(res.data)
        commit('GET_BESTMOVIE', res.data)
        // console.log(state.bestmovies)
      })
    },
    fetchGenreMovie: function ({commit}) {
      axios({
        url: drf.movies.movies(),
        method: 'get',
      })
      .then(res => commit('GET_GENREMOVIE', res.data))
      }
  }
}