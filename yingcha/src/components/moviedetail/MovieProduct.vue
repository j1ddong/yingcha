<template>
  <div>
    <p v-if="movieDirector">감독: {{ movieDirector }}</p>
    <img v-if="movieDirector" :src="movieDirectorUrl" alt="directorImage">
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
    ...mapGetters(['movieDetail', 'movieActors', 'movieDirectorUrl', 'movieDirector'])
  },
}
</script>

<style>

</style>