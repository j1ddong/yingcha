import Vue from 'vue'
import Vuex from 'vuex'

import movies from './modules/movies'
import detail from './modules/detail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movies, detail
  }
})
