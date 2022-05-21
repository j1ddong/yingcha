const HOST = 'http://localhost:8000/api/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'

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
    }
  },
  movies: {
    movies () {
      return HOST + MOVIES
    },
    movie (moviePk) {
      return HOST + MOVIES + `${moviePk}/`
    }

  }
}