<template>
  <div>
    <h1>장르별 추천 영화</h1>
    <movie-list-genre-items v-for="movie in genremovies" :key="movie.id" :movie="movie"></movie-list-genre-items>
  </div>
</template>

<script>
import MovieListGenreItems from '@/components/moviemain/MovieListGenreItems.vue'

export default {
  name: 'MovieListGenre',
  components: {
    MovieListGenreItems
  },
  props:{
    genremovies: Array
  }
}
</script>

<style>

</style>