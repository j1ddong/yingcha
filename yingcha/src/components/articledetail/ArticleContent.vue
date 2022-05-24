<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p> {{ article.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArticleContent',
  props: {
    article: Object,
  }
}
</script>

<style>

</style>