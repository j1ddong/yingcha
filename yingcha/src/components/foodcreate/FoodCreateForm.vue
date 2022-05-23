<template>
  <div>
    <food-select></food-select>
    <movie-select></movie-select>

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
  components: {
    FoodSelect,
    MovieSelect,
  },
  props: {
    article: Object,
    // action: String,
  },
  data() {
    return {
      newArticle : {
        title: this.article.title,
        content: this.article.content,
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
    }
  }
}
</script>

<style>

</style>