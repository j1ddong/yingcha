<template>
  <div>
    <p>{{ name }}</p>
    <img :src="url" alt="actorImgUrl">
  </div>
</template>

<script>
export default {
  name: 'MovieActor',
  props: {
    url: String,
    name: String
  }
}
</script>

<style>

</style>