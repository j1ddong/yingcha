<template>
  <div>
    <h1>Edit Article</h1>
    <article-form v-if="isArticle" :article="article" action="update">
  
    </article-form>
    <router-link :to="{ name: 'ArticleDetail', params : {articlePk: article.pk}}">
      <button>뒤로 가기</button>
    </router-link>
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

<style></style>
