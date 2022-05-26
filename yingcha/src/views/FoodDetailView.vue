<template>
  <div>
    <!-- <h1>{{foodTitle.food_name}}</h1> -->
    <recommend-movie-list :foodTitle="foodTitle.food_name"></recommend-movie-list>
    <food-movie-article-list :foodArticles="foodArticles"></food-movie-article-list>
    <!-- {{ foodPk }} -->
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
    ...mapGetters(['foodTitle', 'foodArticles'])
  },
  methods : {
    ...mapActions(['getFoodTitle', 'fetchFoodArticle', 'fetchRecommendMovie'])
  },
  created () {
    this.getFoodTitle(this.foodPk)
    this.fetchFoodArticle(this.foodPk)
    this.fetchRecommendMovie(this.foodPk)
  }
}
</script>

<style>

</style>