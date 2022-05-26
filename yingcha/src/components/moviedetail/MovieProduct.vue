<template>
  <div>
    <p>감독: {{ directorName }}</p>
    <VueSlickCarousel v-bind="settings">
    <img :src="movieDirectorUrl" alt="directorImage">
    <movie-actor v-for="(actor, idx) in movieActors" :key="actor.id" :actor="actor" :idx="idx"></movie-actor>
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
    ...mapGetters(['movieDetail', 'movieDirectorUrl',]),
    directorName () {
      return this.movieDetail.directors[0].name
    },
    movieActors () {
      return this.movieDetail.actors
    }
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
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      }
    }
  },
}
</script>

<style>

</style>