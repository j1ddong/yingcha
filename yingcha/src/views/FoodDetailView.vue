<template>
  <div>
    <recommend-movie-list></recommend-movie-list>
    <food-movie-article-list :foodArticles="foodArticles"></food-movie-article-list>
    <!-- <p>{{ foodArticles }}</p> -->
  </div>
</template>

<script>
import RecommendMovieList from '@/components/fooddetail/RecommendMovieList.vue'
import FoodMovieArticleList from '@/components/fooddetail/FoodMovieArticleList.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'FoodDetailView',
  components : {
    FoodMovieArticleList, RecommendMovieList
  },
  data () {
    return {
      foodPk: this.$route.params.foodPk
    }
  },
  computed : {
    ...mapGetters(['foodArticles'])
  },
  methods : {
    ...mapActions(['fetchFoodArticle', 'fetchRecommendMovie'])
  },
  created () {
    // console.log(this.foodPk)
    this.fetchFoodArticle(this.foodPk)
    this.fetchRecommendMovie(this.foodPk)
  }
}
</script>

<style>

</style>