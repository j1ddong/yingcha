<template>
  <div>
    <recommend-movie-item v-for="movie in recommendMovie" :key="movie.pk" :movie="movie" ></recommend-movie-item>
  </div>
</template>

<script>
import RecommendMovieItem from '@/components/fooddetail/RecommendMovieItem.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'RecommendMovieList',
  components: {
    RecommendMovieItem
  },
  computed: {
    ...mapGetters(['recommendMovie'])
  }
  
}
</script>

<style>

</style>