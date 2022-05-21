<template>
  <div>
    <h1>mainpage</h1>
    <main-carousel></main-carousel>
    <movie-list-box></movie-list-box>
    <movie-list-popular></movie-list-popular>
    <movie-list-best></movie-list-best>
    <movie-list-genre></movie-list-genre>

  </div>
</template>

<script>
import MainCarousel from '@/components/MainCarousel.vue'
import MovieListBox from '@/components/MovieListBox.vue'
import MovieListPopular from '@/components/MovieListPopular.vue'
import MovieListBest from '@/components/MovieListBest.vue'
import MovieListGenre from '@/components/MovieListGenre.vue'
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
    ...mapGetters(['boxoffices'])
  },
  methods: {
    // a: function() {
    //   this.$store.dispatch('fetchBoxOffice')
    //   // console.log(2)
    // },
    ...mapActions(['fetchBoxOffice'])

  },
  created() {
    // this.a()
    this.fetchBoxOffice()
    // console.log(1)
  },
  }

</script>

<style>

</style>