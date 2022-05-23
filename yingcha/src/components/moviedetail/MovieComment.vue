<template>
  <div>
    <p>comment</p>
    <movie-comment-item v-for="comment in comments" :key="comment.id" :comment="comment"></movie-comment-item>
  </div>
</template>

<script>
import MovieCommentItem from '@/components/moviedetail/MovieCommentItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MovieComment',
  components:{
    MovieCommentItem
  },
  computed: {
    ...mapGetters(['comments'])
  }
}
</script>

<style>

</style>