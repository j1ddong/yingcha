<template>
  <div>
    <router-link :to="{ path: `/movies/${movie.id}/`}">
      <p>{{movie.title}}</p>
      <img :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`" :alt="movie.title">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MovieListBoxItem',
  props: {
    movie: Object
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>