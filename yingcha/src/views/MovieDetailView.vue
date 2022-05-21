<template>
  <div>
    <p>Detail</p>
    <movie-detail></movie-detail>
    <movie-product></movie-product>
    <movie-comment></movie-comment>
    <movie-detail-food></movie-detail-food>
    <movie-detail-recommend-list></movie-detail-recommend-list>
  </div>
</template>

<script>
import MovieDetail from '@/components/moviedetail/MovieDetail.vue'
import MovieProduct from '@/components/moviedetail/MovieProduct.vue'
import MovieComment from '@/components/moviedetail/MovieComment.vue'
import MovieDetailFood from '@/components/moviedetail/MovieDetailFood.vue'
import MovieDetailRecommendList from '@/components/moviedetail/MovieDetailRecommendList.vue'


export default {
  name: 'MovieDetailView',
  components: {
    MovieDetail, MovieProduct, MovieComment, MovieDetailFood, MovieDetailRecommendList
  },
  computed: {

  }

}
</script>

<style>

</style>