<template>
  <div class="mt-5">
    <h3 class="fw-bold mb-4">✨ 출연 / 제작</h3>
    <VueSlickCarousel v-bind="settings">
    <div class="d-flex flex-column text-center">
      <img :src="movieDirectorUrl" alt="directorImage" class="b-radius mx-2">
      <p class="mt-2 mb-0 fw-bold fs-5">감독</p>
      <p class="mt-1 fw-bold">{{ directorName }}</p>
    </div>
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