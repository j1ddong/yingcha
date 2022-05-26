<template>
  <div>
    <i class="fa-solid fa-angle-left fa-3x a-left"></i>
    <i class="fa-solid fa-angle-right fa-3x a-right"></i>
    <div>
      <div class="d-flex justify-content-between">
        <h2 class="text-left fw-bold mb-3">{{foodTitle}}와 어울리는 영화</h2>
        <router-link :to="{ name: 'FoodCreate'}" class="text-decoration-none text-dark fw-bold me-4 fs-5 py-1">
          ➕ 글 작성하기
        </router-link>
      </div>

      <VueSlickCarousel v-bind="settings">
        <recommend-movie-item v-for="movie in recommendMovie" :key="movie.pk" :movie="movie"></recommend-movie-item>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import RecommendMovieItem from '@/components/fooddetail/RecommendMovieItem.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'RecommendMovieList',
  components: {
    RecommendMovieItem, VueSlickCarousel
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
  props : {
    foodTitle: String
  },
  computed: {
    ...mapGetters(['recommendMovie'])
  }
  
}
</script>

<style>

</style>