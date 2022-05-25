<template>
  <div>
    <i class="fa-solid fa-angle-left fa-3x arrow-left"></i>
    <i class="fa-solid fa-angle-right fa-3x arrow-right"></i>
    <div class="margin">
      <h1 class="text-left">천만영화</h1>
      <VueSlickCarousel v-bind="settings">
        <movie-list-popular-items 
        v-for="movie in popularmovies" :key="movie.id" :movie="movie"
        ></movie-list-popular-items>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MovieListPopularItems from '@/components/moviemain/MovieListPopularItems.vue'

export default {
  name: 'MovieListPopular',
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
  components: {
    MovieListPopularItems,
     VueSlickCarousel
  },
  props: {
    popularmovies: Array,
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