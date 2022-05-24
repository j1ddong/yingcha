<template>
  <div>
    <h1> 사용자들이 선택한 조합 </h1>
    <food-movie-article-list></food-movie-article-list>
  </div>
</template>

<script>
import FoodMovieArticleList from '@/components/fooddetail/FoodMovieArticleList.vue'


export default {
  name: 'FoodDetailView',
  components : {
    FoodMovieArticleList
  }
}
</script>

<style>

</style>