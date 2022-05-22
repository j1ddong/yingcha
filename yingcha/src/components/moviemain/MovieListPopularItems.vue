<template>
  <div>
    <p>{{movie.title}}</p>
    <img :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`" :alt="movie.title">
  </div>
</template>

<script>
export default {
  name: 'MovieListPopularItems',
  props: {
    movie: Object
  }
}
</script>

<style>

</style>