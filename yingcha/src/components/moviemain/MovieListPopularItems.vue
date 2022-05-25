<template>
  <div>
    <router-link :to="{ path: `/movies/${movie.id}/`}" class="text-decoration-none text-dark">
      <img :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`" :alt="movie.title" class="h-285">
      <p class="text-center mt-3 ps-3 pe-4">{{movie.title}}</p>
    </router-link>
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
  .h-285 {
    height: 285px;
  }
</style>