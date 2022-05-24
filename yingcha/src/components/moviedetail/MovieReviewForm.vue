<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="reivew">reivew: </label>
      <input type="number" id="reivew" v-model="newComment.voteAverage" required>
      <input type="text" v-model="newComment.content">
      <button>Review</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'MovieReviewForm',
  data() {
    return {
      newComment: {
        voteAverage: null,
        content: null,
      }
    }
  },
  computed: {
    moviePk () {
      return this.$route.params.moviepk
    }
  },
  methods: {
    ...mapActions(['createReview']),
    onSubmit() {
      this.createReview({ moviePk: this.moviePk, voteAverage: this.newComment.voteAverage, content: this.newComment.content, })
      this.newComment.voteAverage = null
      this.newComment.content = null
    }
  }
}
</script>

<style>

</style>