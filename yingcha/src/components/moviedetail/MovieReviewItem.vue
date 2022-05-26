<template>
  <div>
    <ul class="p-0">
      <li class="list-unstyled">
        <!-- <router-link :to="{ name: 'profile', params: { username: review.user.username } }">
        </router-link>:  -->
        <div>
          <span class="fw-bold">🕵️‍♂️ {{ review.user.username }}</span>
          <span>
            <span class="fw-bold ms-4">❤ 좋아요</span>
            <span class="ms-2 fw-bold">{{likeCount}}개</span>
            <span v-if="!isEditing" class="ms-3 fw-bold">⭐ 평점</span>
            <span class="ms-2 fw-bold">{{ payload.voteAverage }}</span>
          </span>
          <div class="mt-2 mb-3">
            <span v-if="!isEditing" class="fw-bold">{{ payload.content }}</span>
          </div>

          <span v-if="isEditing">
            <input type="number" v-model="payload.voteAverage" @keyup.enter="onUpdate">
            <input type="text" v-model="payload.content" @keyup.enter="onUpdate">
            <button @click="onUpdate">수정</button> |
            <button @click="switchIsEditing">취소</button>
          </span>
          <div>
          <span v-if="currentUser.username === review.user.username && !isEditing">
            <button @click="switchIsEditing" class="text-white px-2 me-3 b-radius">수정</button>
            <button @click="deleteItem" class="text-white px-2 me-3 b-radius">삭제</button> 
          </span>
          <span v-else>
            <button @click="likeReview(payload)" class="text-white px-2 me-3 b-radius orange">좋아요</button>
          </span>

          </div>
        </div>
      </li>
    </ul>
    <hr>
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
      forDelete: {
        moviePk: this.review.movie,
        reviewPk: this.review.pk,
      }
    }
  },
  computed: {
    ...mapGetters(['currentUser', 'isAuthor']),
    likeCount() {
      return this.review.like_user?.length
    }
  },
  methods: {
    ...mapActions(['updateReview', 'deleteReview', 'likeReview', 'fetchReviews']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateReview(this.payload)
      this.isEditing = false
    },
    deleteItem () {
      this.deleteReview(this.forDelete)
    }
  },

}
</script>

<style>

</style>