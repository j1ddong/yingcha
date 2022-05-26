<template>
  <div>
    <img :src="movieUrl" :alt="movieTitle" class="">
    <p>{{ movieTitle }}</p>
  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/w200'


export default {
  name: 'MovieRecommendList',
  data () {
    return {
      movieTitle: null,
      movieUrl: null
    }
  },
  props: {
    movie: Number
  },
  methods: {
    getMovieDetail () {
      axios.get(URL_BASE + `/movie/${this.movie}`, {params: {'api_key': API_KEY, 'language': 'ko' }})
        .then(res => {
          this.movieTitle = res.data.title
          this.movieUrl = BASIC_URL_FOR_IMAGE + res.data.poster_path
        })
    }

  },
  created () {
    this.getMovieDetail()
  }
}
</script>

<style>

</style>