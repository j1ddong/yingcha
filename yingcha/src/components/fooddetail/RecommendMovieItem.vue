<template>
  <div>
    <p>{{movie.title}}</p>
    <img :src="posterUrl" alt="">
  </div>
</template>

<script>
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/w200'


export default {
  name: 'RecommendMovieItem',
  props: {
    movie: Object
  },
  computed: {
    posterUrl () {
      return BASIC_URL_FOR_IMAGE + this.movie.poster_url
    }
  }
}
</script>

<style>

</style>