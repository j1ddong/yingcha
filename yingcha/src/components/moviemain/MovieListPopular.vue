<template>
  <div>
    <i class="fa-solid fa-angle-left fa-3x arrow-left"></i>
    <i class="fa-solid fa-angle-right fa-3x arrow-right"></i>
    <div>
      <h2 class="text-left fw-bold mb-3">천만영화</h2>
      <!-- <vue-slick-carousel v-bind="settings" ref="carousel" v-if="slides.length"> <div v-for="(item, id) in slides" :key="id" > -->
      <VueSlickCarousel v-bind="settings" ref="carousel">
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
.arrow-left {
  /* position: relative;
  top: 220px;
  left: 230px; */
  cursor: pointer;
}
.arrow-right {
  /* position: relative;
  top: 220px;
  left: 1600px; */
  cursor: pointer;
}
</style>