import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieMainView from '@/views/MovieMainView'
import MovieDetailView from '@/views/MovieDetailView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MovieMain',
    component: MovieMainView
  },
  {
    path: '/movies/:moviepk',
    name: 'MovieDetail',
    component: MovieDetailView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
