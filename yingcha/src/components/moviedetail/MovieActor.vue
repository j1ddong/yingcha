<template>
  <div>
    {{ actor.name }}
    <img :src="movieActorUrl[idx]" alt="">
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