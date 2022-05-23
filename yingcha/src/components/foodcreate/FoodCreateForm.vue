<template>
  <div>
    <food-select @emit-food-id="foodIdSave"></food-select>
    <movie-select @emit-movie-id="movieIdSave"></movie-select>

    <form @submit.prevent="onSubmit">
      <div>
        <input v-model="newArticle.title" type="text" id="title" placeholder="제목을 입력하세요">
      </div>
      <div>
        <textarea v-model="newArticle.content" type="text" id="content" placeholder="내용을 입력하세요"></textarea>
      </div>
      <div>
        <button>create</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FoodSelect from '@/components/foodcreate/FoodSelect.vue'
import MovieSelect from '@/components/foodcreate/MovieSelect.vue'


export default {
  name: 'FoodCreateForm',
  props: {
    article: Object,
    // action: String,
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
        food_id : '',
        movie_id : '',
        // buttonLabel : null,
      }
    }
  },
  computed: {
    // buttonLabel() {
    //   if (this.action === 'create') {
    //     return '작성하기'
    //   } else {
    //     return '수정하기'
    //   }
    // }
  },
  methods :{
    ...mapActions(['createArticle',]),
     onSubmit() {
     // console.log(1111)
      this.createArticle(this.newArticle)
    },
    movieIdSave (movieId) {
      this.movie_id = movieId
    },
    foodIdSave(foodId) {
      this.food_id = foodId
    }
  }
}
</script>

<style>

</style>