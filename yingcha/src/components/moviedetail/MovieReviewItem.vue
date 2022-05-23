<template>
  <div>
    <li>
      <!-- <router-link :to="{ name: 'profile', params: { username: review.user.username } }">
      </router-link>:  -->
      작성자: {{ review.user.username }}
      좋아요 개수: {{likeCount}}
      <span v-if="!isEditing">평점: {{ payload.voteAverage }}</span>
      <span v-if="!isEditing">내용: {{ payload.content }}</span>

      <span v-if="isEditing">
        <input type="number" v-model="payload.voteAverage" @keyup.enter="onUpdate">
        <input type="text" v-model="payload.content" @keyup.enter="onUpdate">
        <button @click="onUpdate">Update</button> |
        <button @click="switchIsEditing">Cancle</button>
      </span>

      <span v-if="currentUser.username === review.user.username && !isEditing">
        <button @click="switchIsEditing">Edit</button> |
        <button @click="deleteReview(payload)">Delete</button> | 
        <button @click="likeReview(payload)">좋아요</button>
      </span>
    </li>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieReviewItem',
  props: {
    review: Object
  },
  data() {
    return {
      isEditing: false,
      payload: {
        moviePk: this.review.movie,
        reviewPk: this.review.pk,
        content: this.review.content,
        voteAverage: this.review.vote_average
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
    likeCount() {
      return this.review.like_user?.length
    }
  },
  methods: {
    ...mapActions(['updateReview', 'deleteReview', 'likeReview']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateReview(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>

</style>