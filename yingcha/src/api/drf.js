const HOST = 'http://localhost:8000/api/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMUNITIES = 'communities/'
const REVIEWS = 'reviews/'


export default {
  accounts: {
    login () {
      return HOST + ACCOUNTS + 'login/'
    },
    logout () {
      return HOST + ACCOUNTS + 'logout/'
    },
    signup () {
      return HOST + ACCOUNTS +  'signup/'
    },
    currentUserInfo: () => HOST + ACCOUNTS + 'user/',
    profile: username => HOST + ACCOUNTS + 'profile/' + username,
  },
  movies: {
    movies () {
      return HOST + MOVIES
    },
    movie (moviePk) {
      return HOST + MOVIES + `${moviePk}/`
    },
    movieDirector (directorPk) {
      return HOST + MOVIES + 'director/' + `${directorPk}/`
    },
    movieActor (actorPk) {
      return HOST + MOVIES + 'actor/' + `${actorPk}/`
    },
    movieDirectorId (moviePk) {
      return HOST + MOVIES + 'movie/director/' + `${moviePk}/`
    },
    movieReviews (moviePk) {
      return HOST + MOVIES + 'reviews/' + `${moviePk}/`
    },
    review (moviePk, reviewPk) {
      return HOST + MOVIES + `${moviePk}/` + REVIEWS + `${reviewPk}/`
    },
    likeReview (moviePk, reviewPk) {
      return  HOST + MOVIES + `${moviePk}/` + `${reviewPk}/` + 'like/'
    },
    reviews (moviePk) {
      return HOST + MOVIES + `${moviePk}/` + REVIEWS
    },
    recommend (moviePk) {
      return HOST + MOVIES + 'recommend/' + `${moviePk}/`
    }
  },
  communities: {
    articles() {
      return HOST + COMMUNITIES + 'create/' 
    },
    article(articlePk) {
      return HOST + COMMUNITIES + `${articlePk}/`
    },
    search(keyword) {
      return HOST + COMMUNITIES + `search/movie?keyword=${keyword}`
    },
    searchFood(food) {
      return HOST + COMMUNITIES + `search/food?food=${food}`
    },
    food(foodPk) {
      return HOST + COMMUNITIES + 'food/' + `${foodPk}/`
    },
    movietitle(moviePk) {
      return HOST + COMMUNITIES + 'search/movie/' + `${moviePk}/`
    },
    foodtitle(foodPk) {
      return HOST + COMMUNITIES + 'search/food/' + `${foodPk}/`
    },
    foodRecommend(foodPk) {
      return HOST + COMMUNITIES + 'recommend/' + `${foodPk}/`
    }
  }
}