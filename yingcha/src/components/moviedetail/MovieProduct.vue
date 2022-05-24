<template>
  <div>
    <p>감독: {{ movieDetail.director }}</p>
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
    ...mapGetters(['movieDetail', 'movieActors', 'movieDirectorUrl'])
  },
}
</script>

<style>

</style>