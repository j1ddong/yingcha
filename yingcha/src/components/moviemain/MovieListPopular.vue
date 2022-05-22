<template>
  <div>
    <h1>천만영화</h1>
    <!-- <p>{{popularmovies[1]}}</p> -->
    <movie-list-popular-items v-for="movie in popularmovies" :key="movie.id" :movie="movie"></movie-list-popular-items>
  </div>
</template>

<script>
import MovieListPopularItems from '@/components/moviemain/MovieListPopularItems.vue'

export default {
  name: 'MovieListPopular',
  components: {
    MovieListPopularItems,
  },
  props: {
    popularmovies: Array,
  }
}
</script>

<style>

</style>