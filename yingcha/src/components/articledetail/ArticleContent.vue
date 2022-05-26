<template>
  <div class="mt-4 title-border mx-auto form-size">
    <div>
      <h1 class="my-4 fw-bold">{{ article.title }}</h1>
    </div>
    <hr>
    <p class="text-start mx-5"> {{ article.content }}</p>
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
  .title-border {
    border: 3px solid rgb(128,128,128,0.3);
    border-radius: 5%;
    width: 30%;
  }
  .form-size {
    width: 50%;
  }
</style>