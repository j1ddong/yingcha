<template>
  <div>
      <i class="fa-solid fa-angle-left fa-3x arrow-left"></i>
      <i class="fa-solid fa-angle-right fa-3x arrow-right"></i>
    <div>
      <h2 class="text-left fw-bold mb-3">박스오피스 순위</h2>
      <VueSlickCarousel v-bind="settings">
      <movie-list-box-items
      v-for="movie in boxofficemovies" :key="movie.id" :movie="movie"
      ></movie-list-box-items>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MovieListBoxItems from '@/components/moviemain/MovieListBoxItems.vue'

export default {
  name: 'MovieListBox',
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
  components: {
   VueSlickCarousel, MovieListBoxItems
  },
  props: {
    boxofficemovies: Array
  },
}
</script>

<style>
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
