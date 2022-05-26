<template>
  <div class="d-flex flex-column text-center">
    <img :src="actor.url" alt="directorImage" class="b-radius mx-2">
    <p class="mt-2 mb-0 fw-bold fs-5">출연</p>
    <p class="mt-1 fw-bold">{{ actor.name }}</p>
  </div>
</template>

<script>

export default {
  name: 'MovieActor',
  props: {
    actor: Object
  },
}
</script>

<style>

</style>