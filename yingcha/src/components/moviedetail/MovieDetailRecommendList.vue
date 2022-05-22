<template>
  <div>
    <movie-detail-recommend-item v-for="movie in relatedMovies" :key="movie" :movie="movie"></movie-detail-recommend-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieDetailRecommendItem from '@/components/moviedetail/MovieDetailRecommendItem.vue'

export default {
  name: 'MovieRecommendList',
  components: {MovieDetailRecommendItem},
  computed: {
    ...mapGetters(['relatedMovies'])
  },
  methods: {

  },
}
</script>

<style>

</style>