<template>
  <div class="d-flex flex-column text-center">
    <img :src="movieActorUrl[idx]" alt="directorImage" class="b-radius mx-2">
    <p class="mt-2 mb-0 fw-bold fs-5">출연</p>
    <p class="mt-1 fw-bold">{{ actor.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MovieActor',
  props: {
    actor: Object,
    idx: Number
  },
  computed:{
    ...mapGetters(['movieActorUrl'])
  }
}
</script>

<style>

</style>