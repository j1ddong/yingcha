import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from "vuex-persistedstate"
import movies from './modules/movies'
import detail from './modules/detail'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  modules: {
    movies, detail
  }
})
