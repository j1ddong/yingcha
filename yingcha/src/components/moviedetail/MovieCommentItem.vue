<template>
  <div>
    <li class="comment-list-item">
      <!-- <router-link :to="{ name: 'profile', params: { username: comment.user.username } }"> -->
      <!-- </router-link>:  -->
      작성자: {{ comment.user }}
      좋아요 수{{likeNum}}
      
      <span v-if="!isEditing">내용: {{ payload.content }}</span>

      <span v-if="isEditing">
        <input type="text" v-model="payload.content">
        <button @click="onUpdate">Update</button> |
        <button @click="switchIsEditing">Cancle</button>
      </span>

      <span v-if="currentUser.username === comment.user.username && !isEditing">
        <button @click="switchIsEditing">Edit</button> |
        <button @click="deleteComment(payload)">Delete</button>
      </span>
    </li>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieCommentItem',
  props: {
    comment: Object
  },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.$route.params.moviepk,
        commentPk: this.comment.id,
        content: this.comment.content
      },
      likeNum: this.comment.like_user.length
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
   methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>

</style>