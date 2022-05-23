import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"
import movies from './modules/movies'
import detail from './modules/detail'
import foodArticle from './modules/foodArticle'
import accounts from './modules/accounts'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    movies, detail, foodArticle, accounts
  }
})
