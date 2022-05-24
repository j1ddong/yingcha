<template>
  <div>
    <h1> 사용자들이 선택한 조합 </h1>
    <food-movie-article-item></food-movie-article-item>
  </div>
</template>

<script>
import FoodMovieArticleItem from '@/components/fooddetail/FoodMovieArticleItem.vue'


export default {
  name: 'FoodMovieArticleList',
  components :{
    FoodMovieArticleItem,
  }
}
</script>

<style>

</style>