<template>
  <div>
    <!-- {{foodArticle}} -->
    <!-- router-link: article detail로 넘어감 -->
    <router-link :to="{ name: 'ArticleDetail', params : {articlePk: foodArticle.pk}}"  class="text-decoration-none text-dark">
      <h5 class="fw-bold mb-3">🎈{{ foodArticle.user.username}}님의 추천</h5>
      <p class="fw-bold">🍜 {{ foodTitle.food_name }} & 🎭{{ movieTitle.title }} </p>
      <!-- <p>: {{foodArticle.title}} </p> -->
    </router-link>
    <hr>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['movieTitle', 'foodTitle'])
  },
  methods: {
    ...mapActions(['getMovieTitle', 'getFoodTitle',])
  },
  created () {
    this.getMovieTitle(this.moviePk)
    this.getFoodTitle(this.foodPk)

  }
}
</script>

<style>

</style>