<template>
  <div>
    <router-link :to="{ path: `/movies/${movie.id}/`}"  class="text-decoration-none text-dark">
      <img :src="posterUrl" :alt="movie.title" class="h-285">
      <p class="text-center mt-3 ps-3 pe-4">{{movie.title}}</p>
    </router-link>
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