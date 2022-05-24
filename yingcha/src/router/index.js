import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieMainView from '@/views/MovieMainView'
import MovieDetailView from '@/views/MovieDetailView'
import FoodCreateView from '@/views/FoodCreateView'
import ArticleDetailView from '@/views/ArticleDetailView'
import FoodDetailView from '@/views/FoodDetailView'
import ArticleEditView from '@/views/ArticleEditView'

import LoginView from '@/views/LoginView.vue'
import LogoutView from '@/views/LogoutView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile/:username',  // /profile/neo
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/',
    name: 'MovieMain',
    component: MovieMainView
  },
  {
    path: '/movies/:moviepk',
    name: 'MovieDetail',
    component: MovieDetailView
  },
  {
    path: '/article/new',
    name: 'FoodCreate',
    component: FoodCreateView
  },
  {
    path: '/communities/:articlepk',
    name: 'ArticleDetail',
    component: ArticleDetailView
  },
  {
    path: '/communities/:articlepk/edit',
    name: 'ArticleEdit',
    component: ArticleEditView
  },
  {
    path: '/food/:foodPk',
    name: 'FoodDetailView',
    component: FoodDetailView
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
