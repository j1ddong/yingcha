<template>
  <div>
    <p>Detail</p>
    <movie-detail></movie-detail>
    <movie-product></movie-product>
    <movie-review></movie-review>
    <movie-detail-food></movie-detail-food>
    <movie-detail-recommend-list></movie-detail-recommend-list>
  </div>
</template>

<script>
import MovieDetail from '@/components/moviedetail/MovieDetail.vue'
import MovieProduct from '@/components/moviedetail/MovieProduct.vue'
import MovieReview from '@/components/moviedetail/MovieReview.vue'
import MovieDetailFood from '@/components/moviedetail/MovieDetailFood.vue'
import MovieDetailRecommendList from '@/components/moviedetail/MovieDetailRecommendList.vue'


export default {
  name: 'MovieDetailView',
  components: {
    MovieDetail, MovieProduct, MovieReview, MovieDetailFood, MovieDetailRecommendList
  },
  data () {
    return {
      moviePk: this.$route.params.moviepk
    }
  },
  methods: {
    fetchMovieDetail () {
      this.$store.dispatch('fetchMovieDetail', this.moviePk)
    },
    // fetchMovieCredits () {
    //   this.$store.dispatch('fetchMovieCredits', this.moviePk)
    // },
    fetchRelatedName () {
      this.$store.dispatch('fetchRelatedName', this.moviePk)
    },
    fetchReviews () {
      this.$store.dispatch('fetchReviews', this.moviePk)
    }
  },
  created () {
    this.fetchMovieDetail(),
    // this.fetchMovieCredits(),
    this.fetchRelatedName(),
    this.fetchReviews()
  }
}
</script>

<style>

</style>