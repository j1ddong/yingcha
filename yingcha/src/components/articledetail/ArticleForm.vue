<template>
  <div>
    <food-select @emit-food-id="foodIdSave" :action="action" :foodId="newArticle.foodId"></food-select>
    <movie-select @emit-movie-id="movieIdSave" :action="action" :movieId="newArticle.movieId"></movie-select>
    
    <form @submit.prevent="onSubmit">
      <div>
        <input v-model="newArticle.title" type="text" id="title" placeholder="제목을 입력하세요">
      </div>
      <div>
        <textarea v-model="newArticle.content" type="text" id="content" placeholder="내용을 입력하세요"></textarea>
      </div>
      <div>
        <button>{{ action }}</button>
      </div>
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
      }
        // buttonLabel : null,
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
    }
  }

 
</script>

<style>

</style>