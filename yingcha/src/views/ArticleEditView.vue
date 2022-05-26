<template>
  <div class="mt-5 text-center">
    <div class="d-flex justify-content-center">
      <router-link :to="{ name: 'ArticleDetail', params : {articlePk: article.pk}}">
        <button class="fw-bold border-0 p-1 me-5 mt-1 bg-white font-main-color">&lt; 뒤로</button>
      </router-link>
      <h2 class="fw-bold">게시글 수정하기</h2>
    </div>
    <article-form v-if="isArticle" :article="article" action="update" class="mt-5">
  
    </article-form>
    
  </div>

</template>

<script>
import ArticleForm from '@/components/articledetail/ArticleForm.vue'

import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'AritcleEditView',
    components: { ArticleForm },
    data () {
      return {
        articlePk: this.$route.params.articlePk,
      }
    },
    computed: {
      ...mapGetters(['article', 'isArticle',])
    },
    methods: {
      ...mapActions(['fetchArticle'])
    },
    created() {
      // console.log(this.$route.params.articlePk) //ok
      this.fetchArticle(this.articlePk)
    },
  }
</script>

<style>
.font-main-color {
  color: #1ec800
}
</style>
