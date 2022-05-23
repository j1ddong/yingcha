<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="content">contnet: </label>
        <textarea v-model="newArticle.content" type="text" id="content"></textarea>
      </div>
      <div>
        <button>{{ action }}</button>
      </div>
  </form>
  </div>
</template>

<script>

export default {
  name: 'MovieReviewForm',
  
}
</script>

<style>

</style>