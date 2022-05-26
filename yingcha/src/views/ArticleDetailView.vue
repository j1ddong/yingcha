<template>
  <div class="text-center mt-3">
    <h3 class="fw-bold mb-4">🍜 {{foodTitle.food_name}} & 🎭 {{movieTitle.title}}</h3>
    <!-- <h1>detail</h1> -->
    <!-- <p>{{ foodId }}</p> -->
    <!-- <p> {{article }}</p> -->
    <!-- <p>{{article.pk}}</p> -->
    <!-- <p>food_id, movie_id 이용해서 이미지 가져오기</p> -->
    <div class="d-flex justify-content-center">
      <img :src="foodTitle.food_image" alt="foodTitle.food_name" style="width: 30%" class="me-3 b-radius">
      <img :src="`https://image.tmdb.org/t/p/w200/${movieTitle.poster_url}`" :alt="movieTitle.title" class="h-210 ms-3 b-radius">
    </div>
    <!-- <article-image :moviePk="moviePk" :foodPk="foodPk"></article-image> -->
    <article-content :article="article" class="my-5"></article-content>

    <div class="d-flex justify-content-center">
      <div>
        <router-link :to="{ name: 'FoodDetailView', params : {foodPk: foodTitle.id} }" class="text-decoration-none mt-5">
          <button class="text-white fw-bold b-radius p-1 me-2">뒤로</button>
        </router-link>
      </div>

      <div v-if="isAuthor">
        <router-link :to="{ name: 'ArticleEdit', params : {articlePk: article.pk} }">
          <button class="text-white fw-bold b-radius p-1 mx-2 orange">수정하기</button>
        </router-link>
        <button @click="deleteThisArticle" class="text-white fw-bold b-radius p-1 ms-2 orange">삭제하기</button>
      </div> 
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
.h-210 {
  height: 210px;
}
.b-radius {
  border-radius: 5%;
}
.orange {
  background-color: #ffbf69;
  border: 1px solid #ffbf69;
}
</style>