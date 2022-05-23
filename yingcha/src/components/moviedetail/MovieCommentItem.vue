<template>
  <div>
    <!-- <li class="comment-list-item">
      <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
        {{ comment.user.username }}
      </router-link>: 
      
      <span v-if="!isEditing">{{ payload.content }}</span>

      <span v-if="isEditing">
        <input type="text" v-model="payload.content">
        <button @click="onUpdate">Update</button> |
        <button @click="switchIsEditing">Cancle</button>
      </span>

      <span v-if="currentUser.username === comment.user.username && !isEditing">
        <button @click="switchIsEditing">Edit</button> |
        <button @click="deleteComment(payload)">Delete</button>
      </span>
    </li> -->
    <p>작성자 {{comment.user}}</p>
    <p>내용 {{comment.content}}</p>
    <p>좋아요 수: {{comment}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'MovieCommentItem',
  props: {
    comment: Object
  },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },

}
</script>

<style>

</style>