// import axios from 'axios'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import drf from '@/api/drf'

Vue.use(Vuex)
const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
// const params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}

export default {
  state: {
    boxoffices: [],
    // popularMovie: [],
    // bestMovie: [],
    // genreMovie: [],
  },
  getters: {
    // boxoffices: state => state.boxoffices
  },
  mutations: {
    // GET_BOXOFFICE: (state, boxoffices) => state.boxoffices = boxoffices,
  },
  actions: {
    fetchBoxOffice: function () {
      // console.log('mmovie')
      axios.get(URL_BASE+'/movie/now_playing', {params:
        {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
      })
      .then(res=>{
        console.log(res.data)
      })
    }
  },
}