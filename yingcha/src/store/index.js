import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"
import movies from './modules/movies'
import detail from './modules/detail'
import fooddetail from './modules/fooddetail'
import article from './modules/article'
import accounts from './modules/accounts'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    movies, detail, fooddetail, article, accounts
  }
})
