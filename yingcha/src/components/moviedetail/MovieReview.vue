<template>
  <div>
    <p>Review</p>
    <movie-review-form></movie-review-form>
    <movie-review-item v-for="review in reviews" :key="review.id" :review="review"></movie-review-item>
  </div>
</template>

<script>
import MovieReviewItem from '@/components/moviedetail/MovieReviewItem.vue'
import MovieReviewForm from '@/components/moviedetail/MovieReviewForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MovieReview',
  components:{
    MovieReviewItem, MovieReviewForm
  },
  computed: {
    ...mapGetters(['reviews'])
  }
}
</script>

<style>

</style>