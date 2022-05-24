<template>
  <div>
    <h1>detail</h1>
    <!-- <p>{{article}}</p> -->
    <!-- <p>food_id, movie_id 이용해서 이미지 가져오기</p> -->
    <article-image :moviePk="article.movie_id" :foodPk="article.food_id"></article-image>
    <article-content :article="article"></article-content>
    <div v-if="isAuthor">
      <!-- <router-link :to="{ name: 'articleEdit', params: { articlePk } }">
        <button>Edit</button>
      </router-link> -->
      |
      <!-- <button @click="deleteArticle(articlePk)">Delete</button> -->
    </div>

  </div>
</template>

<script>
import ArticleContent from '@/components/articledetail/ArticleContent.vue'
import ArticleImage from '@/components/articledetail/ArticleImage.vue'
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ArticleDetailView',
  components : {
    ArticleContent,
    ArticleImage,
  },
  data () {
    return {
      articlePk: this.$route.params.articlePk
    }
  },
  computed: {
      ...mapGetters(['article']),
      // likeCount() {
      //   return this.article.like_users?.length
      // }
    },
    methods: {
      ...mapActions([
        'fetchArticle',
        // 'likeArticle',
        // 'deleteArticle',
      ])
    },
    created() {
      // console.log(this.articlePk)
      this.fetchArticle(this.articlePk)
    },

}
</script>

<style>

</style>