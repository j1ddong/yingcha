<template>
  <div>
    {{ actor.name }}
    <img :src="actor.url" alt="">
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