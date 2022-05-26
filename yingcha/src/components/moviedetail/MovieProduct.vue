<template>
  <div class="mt-5">
    <h3 class="fw-bold mb-4">✨ 출연 / 제작</h3>
    <div class="d-flex text-center">
      <div>
        <img :src="movieDirectorUrl" alt="directorImage" class="b-radius mx-2">
        <p class="mt-2 mb-0 fw-bold fs-5">감독</p>
        <p class="mt-1 fw-bold">{{ directorName }}</p>
      </div>
      <movie-actor v-for="actor in movieActors.slice(0,4)" :key="actor.id" :actor="actor"></movie-actor>
    </div>
  </div>
</template>

<script>
import MovieActor from '@/components/moviedetail/MovieActor.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'MovieProduct',
  components: {
    MovieActor
  },
  computed:{
    ...mapGetters(['movieDetail', 'movieDirectorUrl', 'movieActors']),
    directorName () {
      return this.movieDetail.directors[0].name
    },
  },
  data () {
    return {
      settings: {
        "dots": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 5,
        "initialSlide": 0,
      }
    }
  },
}
</script>

<style>

</style>