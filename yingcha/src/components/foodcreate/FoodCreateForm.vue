<template>
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
</template>

<script>
import {mapActions} from 'vuex'


export default {
  name: 'FoodCreateForm',
  props: {
    article: Object,
    action: String,
  },
  data() {
    return {
      newArticle : {
        title: this.article.title,
        content: this.article.content,
      }
    }
  },
  methods: {
    ...mapActions(['createArticle',]),
    onSubmit() {
      // console.log(this.action)
      if (this.action === 'create') {
        this.createArticle(this.newArticle)
      }
    }
  }
}
</script>

<style>

</style>