<template>
  <div>
    <router-link :to="{ path: `/communities/${foodArticle.pk}`}">
      <p>{{ foodArticle.user.username}}: {{foodArticle.title}} </p>
      <p>{{ foodTitle.food_name }} // {{ movieTitle.title }} </p>
    </router-link>
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
      foodPk : this.foodArticle.food_id
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