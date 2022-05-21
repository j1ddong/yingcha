<template>
  <div>
    <h1>mainpage</h1>
    <main-carousel></main-carousel>
    <movie-list-box :boxofficemovies="boxoffices"></movie-list-box>
    <movie-list-popular :popularmovies="popularmovies"></movie-list-popular>
    <movie-list-best :bestmovies="bestmovies"></movie-list-best>
    <movie-list-genre></movie-list-genre>

  </div>
</template>

<script>
import MainCarousel from '@/components/moviemain/MainCarousel.vue'
import MovieListBox from '@/components/moviemain/MovieListBox.vue'
import MovieListPopular from '@/components/moviemain/MovieListPopular.vue'
import MovieListBest from '@/components/moviemain/MovieListBest.vue'
import MovieListGenre from '@/components/moviemain/MovieListGenre.vue'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'MovieMainView',
  components: {
    MainCarousel,
    MovieListBox,
    MovieListPopular,
    MovieListBest,
    MovieListGenre,
  },
  computed: {
    ...mapGetters(['boxoffices', 'bestmovies', 'popularmovies'])
  },
  methods: {
    // a: function() {
    //   this.$store.dispatch('fetchBoxOffice')
    //   // console.log(2)
    // },
    ...mapActions(['fetchBoxOffice', 'fetchBestMovie', 'fecthPopularMovie'])

  },
  created() {
    // this.a()
    this.fetchBoxOffice()
    this.fetchBestMovie()
    this.fecthPopularMovie()
    // console.log(1)
  },
  }

</script>

<style>

</style>