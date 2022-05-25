<template>
  <div>
    <h1>user님만의 꿀조합을 알려주세요!</h1>
    <article-form :article="article" action="create"></article-form>
  </div>
</template>

<script>
import ArticleForm from '@/components/articledetail/ArticleForm.vue'


export default {
  name: 'FoodCreateView',
  components:{
    ArticleForm,

  },
  data() {
    return {
      article :{
        pk: null,
        food_id: '',
        movie_id: '',
        title: '',
        content: '',
      }
    }
  },
}
</script>

<style>

</style>