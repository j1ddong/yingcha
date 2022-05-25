<template>
  <div>
    <h1>detail</h1>
    <!-- <p>{{ foodId }}</p> -->
    <!-- <p> {{article }}</p> -->
    <!-- <p>{{article.pk}}</p> -->
    <!-- <p>food_id, movie_id 이용해서 이미지 가져오기</p> -->
    <div>
      <img :src="`https://image.tmdb.org/t/p/w200/${movieTitle.poster_url}`" :alt="movieTitle.title">
      <img :src="foodTitle.food_image" alt="foodTitle.food_name" style="width: 30%">
    </div>
    <!-- <article-image :moviePk="moviePk" :foodPk="foodPk"></article-image> -->
    <article-content :article="article"></article-content>
    <div v-if="isAuthor">
       <router-link :to="{ name: 'ArticleEdit', params : {articlePk: article.pk}}">
        <button>수정하기</button>
      </router-link>
      <button @click="deleteThisArticle">Delete</button>
    </div> 
  </div>
</template>

<script>
import ArticleContent from '@/components/articledetail/ArticleContent.vue'
// import ArticleImage from '@/components/articledetail/ArticleImage.vue'
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ArticleDetailView',
  components : {
    ArticleContent,
    // ArticleImage,
  },
  data() {
    return {
      articlePk: this.$route.params.articlePk,
      // moviePk: '',
      // foodPk: '',
    }
  },
  computed: {
      ...mapGetters(['article', 'isAuthor', 'movieTitle', 'foodTitle']),
      // likeCount() {
      //   return this.article.like_users?.length
      // }
    },
  methods: {
    ...mapActions([
      'fetchArticle',
      'deleteArticle', 
      // 'getMovieTitle', 
      // 'getFoodTitle'
      // 'likeArticle',
    ]),
    deleteThisArticle() {
      // console.log(this.article.pk)
      // console.log(this.article.food_id)
      const payload = {
        articlePk: this.article.pk,
        foodId : this.article.food_id
      }
      this.deleteArticle(payload)
    }
    },
    created() {
      // console.log(this.articlePk)
      // console.log('-----')
      this.fetchArticle(this.articlePk)
    },

}
</script>

<style>

</style>