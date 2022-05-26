<template>
  <div>
    <div>
      <i class="fa-solid fa-angle-left fa-3x a-left"></i>
      <i class="fa-solid fa-angle-right fa-3x a-right"></i>
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
 .a-left {
   position: relative;
   top: 240px;
   left: -40px;
   cursor: pointer;
 }
 .a-right {
   position: relative;
   top: 240px;
   left: 1031px;
   cursor: pointer;
 }
</style>