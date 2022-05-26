<template>
  <div class="mt-5 text-center">
    <h2 class="fw-bold">user님만의 꿀조합을 알려주세요!</h2>
    <article-form :article="article" action="create" class="mt-5"></article-form>
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