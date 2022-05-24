<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w200/${movieTitle.poster_url}`" :alt="movieTitle.title">
    <img :src="foodTitle.food_image" alt="foodTitle.food_name" style="width: 30%">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ArticleImage',
  props: {
    moviePk: null,
    foodPk: null,
  },
  computed: {
    ...mapGetters(['movieTitle','foodTitle'])
  },
  methods: {
    ...mapActions(['getMovieTitle', 'getFoodTitle'])
  },
  created () {
    this.getMovieTitle(this.moviePk)
    this.getFoodTitle(this.foodPk)
  }
}
</script>

<style>

</style>