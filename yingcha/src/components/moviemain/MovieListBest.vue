<template>
  <div>
    <h2>평점이 높은 영화</h2>
    <!-- <p>{{bestmovies}}</p> -->
    <movie-list-best-items v-for="movie in bestmovies" :key="movie.id" :movie="movie"></movie-list-best-items>
  </div>
</template>

<script>
import MovieListBestItems from '@/components/moviemain/MovieListBestItems.vue'

export default {
  name: 'MovieListBest',
  components:{
    MovieListBestItems
  },
  props: {
    bestmovies: Array,
  }
}
</script>

<style>

</style>