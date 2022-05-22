<template>
  <div>
    <!-- <p>{{movies['results']}}</p> -->
    <h2>박스오피스 순위</h2>
    <movie-list-box-items v-for="movie in boxofficemovies" :key="movie.id" :movie="movie"></movie-list-box-items>
  </div>
</template>

<script>
import MovieListBoxItems from '@/components/moviemain/MovieListBoxItems.vue'
export default {
  name: 'MovieListBox',
  components: {
    MovieListBoxItems
  },
  props: {
    boxofficemovies: Array
  },
}
</script>

<style>

</style>