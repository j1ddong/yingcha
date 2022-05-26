<template>
  <div>
    {{movieDetail.directors[0].id}}
    <p>감독: {{ directorName }}</p>
    <img :src="movieDirectorUrl" alt="directorImage">
    <movie-actor v-for="actor in movieActors" :key="actor.id" :actor="actor"></movie-actor>
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
    ...mapGetters(['movieDetail', 'movieDirectorUrl',]),
    directorName () {
      return this.movieDetail.directors[0].name
    },
    movieActors () {
      return this.movieDetail.actors
    }
  },
}
</script>

<style>

</style>