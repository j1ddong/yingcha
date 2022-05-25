<template>
  <div>
    <i class="fa-solid fa-angle-left fa-3x arrow-left"></i>
      <i class="fa-solid fa-angle-right fa-3x arrow-right"></i>
    <div class="margin">
      <h2 class="text-left">장르별 추천 영화</h2>
      <VueSlickCarousel v-bind="settings">
      <movie-list-genre-items v-for="movie in genremovies" :key="movie.id" :movie="movie"></movie-list-genre-items>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MovieListGenreItems from '@/components/moviemain/MovieListGenreItems.vue'

export default {
  name: 'MovieListGenre',
  components: {
    MovieListGenreItems, VueSlickCarousel
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
  props:{
    genremovies: Array
  }
}
</script>

<style>
.margin {
  margin: 10px 15rem 0 19rem;
}
.arrow-left {
  position: relative;
  top: 220px;
  left: 230px;
  cursor: pointer;
}
.arrow-right {
  position: relative;
  top: 220px;
  left: 1600px;
  cursor: pointer;
}
</style>