<template>
  <div>
    <h1> 사용자들이 선택한 조합 </h1>
    <!-- <p>{{ foodArticles }}</p> -->
    <food-movie-article-item 
      v-for="foodArticle in foodArticles"
      :key="foodArticle.pk"
      :foodArticle="foodArticle"
    ></food-movie-article-item>
  </div>
</template>

<script>
import FoodMovieArticleItem from '@/components/fooddetail/FoodMovieArticleItem.vue'


export default {
  name: 'FoodMovieArticleList',
  components :{
    FoodMovieArticleItem,
  },
  props : {
    foodArticles: Array,
  }
}
</script>

<style>

</style>