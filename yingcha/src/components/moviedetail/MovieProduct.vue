<template>
  <div>
    <p>감독: {{ directorName }}</p>
    <!-- {{movieActors}} -->
    <VueSlickCarousel v-bind="settings">
    <img :src="movieDirectorUrl" alt="directorImage">
    <movie-actor v-for="actor in movieActors" :key="actor.id" :actor="actor"></movie-actor>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MovieActor from '@/components/moviedetail/MovieActor.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'MovieProduct',
  components: {
    MovieActor, VueSlickCarousel
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