<template>
  <div>
    <food-select @emit-food-id="foodIdSave" :action="action" :foodId="newArticle.foodId"></food-select>
    <movie-select @emit-movie-id="movieIdSave" :action="action" :movieId="newArticle.movieId"></movie-select>
    <hr style="width: 300px;" class="mx-auto">
    <form @submit.prevent="onSubmit">
      <div class="mt-5">
        <label for="title" class="fw-bold mb-3 me-3 fs-5"> 📝 제목</label>
        <input v-model="newArticle.title" type="text" id="title" placeholder="📝 제목을 입력하세요" class="border-main-color s-200">
      </div>
      <div class="mt-2">
        <label for="content" class="align-top fw-bold me-3 fs-5">🔪 내용</label>
        <textarea v-model="newArticle.content" type="text" 
          id="content" placeholder="🔪 내용을 입력하세요"
          class="s-textarea border-main-color"
        ></textarea>
      </div>
      <button class="ms-5 mt-4 text-white fw-bold p-1 b-radius orange">저장하기</button>

    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FoodSelect from '@/components/foodcreate/FoodSelect.vue'
import MovieSelect from '@/components/foodcreate/MovieSelect.vue'


export default {
  name: 'ArticleForm',
  props: {
    article: Object,
    action: String,
  },
  components:{
    FoodSelect,
    MovieSelect,
  },
  data() {
    return {
      newArticle : {
        title: this.article.title,
        content: this.article.content,
        movieId: this.article.movie_id,
        foodId: this.article.food_id,
        buttonLabel : null,
      }
      }
    },
  methods :{
      ...mapActions(['createArticle', 'updateArticle']),
      onSubmit() {
      // console.log(1111)
      // 유저 정보 저장
      if (this.action === 'create') {
          this.createArticle(this.newArticle)
      } else if (this.action === 'update') {
        const payload = {
          pk: this.article.pk,
          ...this.newArticle,
          }
          this.updateArticle(payload)
        }
      },
      movieIdSave (movieId) {
        // console.log('movieid') // ok
        this.newArticle.movie_id = movieId
      },
      foodIdSave(foodId) {
        // console.log('foodid') // ok
        this.newArticle.food_id = foodId
        // console.log(this.newArticle.food_id)
      }
    },
  }

 
</script>

<style>
  .s-textarea {
    width: 250px;
    height: 300px;
    resize: none;
  }
</style>