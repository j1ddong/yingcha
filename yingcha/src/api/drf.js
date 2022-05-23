const HOST = 'http://localhost:8000/api/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMUNITIES = 'communities/'


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
  },
  communities: {
    articles() {
      return HOST + COMMUNITIES + 'create/' 
    },
    search(keyword) {
      return HOST + COMMUNITIES + `search?keyword=${keyword}`
    }
  }
}