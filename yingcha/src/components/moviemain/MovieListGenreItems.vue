<template>
  <div>
    <router-link :to="{ path: `/movies/${movie.id}/`}" class="text-decoration-none text-dark">
      <img :src="`https://image.tmdb.org/t/p/w200/${movie.poster_url}`" :alt="movie.title" class="h-285">
      <div class="text-center mt-3 ps-3 pe-4">
        <h5 class="fw-bold">{{movie.genre}}</h5>
        <p>{{movie.title}}</p>
      </div>    
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'MovieListUpcomingItems',
  props:{
    movie: Object
  }
}
</script>

<style>
  .h-285 {
    height: 285px;
  }
</style>