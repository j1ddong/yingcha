// import axios from 'axios'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import drf from '@/api/drf'

Vue.use(Vuex)
// const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
// const URL_BASE = 'https://api.themoviedb.org/3'
// const params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}

export default {
  state: {
    // articles: [],
    article: {},
  },
  getters: {
    // articles: state => state.articles,
    article: state => state.article,
    // isAuthor: (state, getters) => {
    //   return state.article.user?.username === getters.currentUser.username
    // },
    // isArticle: state => !_.isEmpty(state.article),
  },
  mutations: {
    // SET_ARTICLES: (state, articles) => state.articles = articles,
    GET_ARTICLE: (state, article) => state.article = article,
    // SET_ARTICLE_COMMENTS: (state, comments) => (state.article.comments = comments),
  },
  actions: {
    createArticle({ commit }, article) {
      console.log(111111)
      /* 게시글 생성
      POST: articles URL (게시글 입력정보, token)
        성공하면
          응답으로 받은 게시글을 state.article에 저장
          ArticleDetailView 로 이동
        실패하면
          에러 메시지 표시
      */
      commit;
      axios({
        url: drf.communities.articles(),
        method: 'post',
        data: article,
        // headers: getters.authHeader,
      })
      .then(res => {
        console.log(res.data)
        commit('GET_ARTICLE', res.data)
        // router.push({
        //   name: 'article',
        //   params: { articlePk: getters.article.pk }
        // })
      })
    },
  }
}