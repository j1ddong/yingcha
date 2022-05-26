<template>
  <div>
    <!-- router-link: article detail로 넘어감 -->
    <router-link :to="{ name: 'ArticleDetail', params : {articlePk: foodArticle.pk} }"  class="text-decoration-none text-dark">
      <h5 class="fw-bold mb-3">🎈{{ foodArticle.user.username}}님의 추천</h5>
      <p class="fw-bold">🍜 {{ foodArticle.food.food_name }} & 🎭{{ foodArticle.movie.title }} </p>
      <!-- <p>: {{foodArticle.title}} </p> -->
    </router-link>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'FoodMovieArticleItem',
  props: {
    foodArticle: Object
  },
  data () {
    return {
      moviePk : this.foodArticle.movie_id,
      foodPk : this.foodArticle.food_id,
    }
  },
}
</script>

<style>

</style>