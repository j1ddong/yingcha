<template>
  <div>
    <i class="fa-solid fa-angle-left fa-3x arrow-left"></i>
    <i class="fa-solid fa-angle-right fa-3x arrow-right"></i>
    <div class="margin">
      <h2 class="text-left">평점이 높은 영화</h2>
      <VueSlickCarousel v-bind="settings">
        <movie-list-best-items v-for="movie in bestmovies" :key="movie.id" :movie="movie"></movie-list-best-items>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MovieListBestItems from '@/components/moviemain/MovieListBestItems.vue'

export default {
  name: 'MovieListBest',
  components:{
    MovieListBestItems, VueSlickCarousel
  },
  props: {
    bestmovies: Array,
  },
  data () {
    return {
      settings: {
        "dots": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 5,
        "initialSlide": 0
      }
    }
  },
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