<template>
  <div>
    <food-movie-article-list :foodArticles="foodArticles"></food-movie-article-list>
    <!-- {{ foodPk }} -->
  </div>
</template>

<script>
import FoodMovieArticleList from '@/components/fooddetail/FoodMovieArticleList.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'FoodDetailView',
  components : {
    FoodMovieArticleList
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
    ...mapActions(['fetchFoodArticle'])
  },
  created () {
    // console.log(this.foodPk)
    this.fetchFoodArticle(this.foodPk)
  }
}
</script>

<style>

</style>