<template>
  <div>
    <router-link :to="{ path: `/movies/${movie.id}/`}">
      <p>{{movie.genre}}</p>
      <p>{{movie.title}}</p>
      <img :src="`https://image.tmdb.org/t/p/w200/${movie.poster_url}`" :alt="movie.title">
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

</style>