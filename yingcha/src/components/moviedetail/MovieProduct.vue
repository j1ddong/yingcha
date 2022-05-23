<template>
  <div>
    <p>감독: {{ movieDirector.name }}</p>
    <img :src="movieDirectorUrl" alt="directorImage">
    <movie-actor v-for="actor in movieActors" :key="actor" :actor="actor"></movie-actor>
  </div>
</template>

<script>
import MovieActor from '@/components/moviedetail/MovieActor.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'MovieProduct',
  components: {
    MovieActor, 
  },
  computed:{
    ...mapGetters(['movieDirector', 'movieActors', 'movieDirectorUrl'])
  },
}
</script>

<style>

</style>