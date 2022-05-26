<template>
  <div>
    <VueSlickCarousel v-bind="settings">
    <movie-detail-recommend-item v-for="movie in relatedMovies" :key="movie" :movie="movie"></movie-detail-recommend-item>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapGetters } from 'vuex'
import MovieDetailRecommendItem from '@/components/moviedetail/MovieDetailRecommendItem.vue'

export default {
  name: 'MovieRecommendList',
  components: {MovieDetailRecommendItem, VueSlickCarousel},
  computed: {
    ...mapGetters(['relatedMovies'])
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