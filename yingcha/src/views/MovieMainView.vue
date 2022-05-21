<template>
  <div>
    <h1>mainpage</h1>
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import MainCarousel from '@/components/MainCarousel.vue'
import MovieListBox from '@/components/MovieListBox.vue'
import MovieListPopular from '@/components/MovieListPopular.vue'
import MovieListBest from '@/components/MovieListBest.vue'
import MovieListGenre from '@/components/MovieListGenre.vue'
import axios from 'axios',


export default {
  name: 'MovieMain',
  component: {
    NavBar,
    MainCarousel,
    MovieListBox,
    MovieListPopular,
    MovieListBest,
    MovieListGenre,
  },
  data() {
    return {
      boxOfficeMovie: [],
      popularMovie: [],
      bestMovie: [],
      genreMovie: [],
    }
  },
  created() {
    API_KEY = '44f9d36b9d8fa8e880839899c577f866'
    URL_BASE = 'https://api.themoviedb.org/3'
    params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
    getBoxoffice() {
      PATH = '/movie/now_playing'
      axios.get(URL_BASE + PATH, parms=params)
      .then(res =>{
        console.log(res)
      })
    }
    
    
  }
}
</script>

<style>

</style>