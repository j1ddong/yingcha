<template>
  <div>
    <food-movie-article-list></food-movie-article-list>
  </div>
</template>

<script>
import FoodMovieArticleList from '@/components/fooddetail/FoodMovieArticleList.vue'
import { mapActions } from 'vuex'


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
  computed : {},
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