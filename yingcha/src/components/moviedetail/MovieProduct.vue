<template>
  <div>
    <p>감독: {{ directorName }}</p>
    <img :src="directorUrl" alt="directorImage">
    <movie-actor v-for="actor in movieActors" :key="actor" :actor="actor"></movie-actor>
  </div>
</template>

<script>
import MovieActor from '@/components/moviedetail/MovieActor.vue'
import { mapGetters } from 'vuex'
import drf from '@/api/drf'
import axios from 'axios'

const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/w200'


export default {
  name: 'MovieProduct',
  components: {
    MovieActor, 
  },
  data () {
    return {
    directorName: null,
    directorUrl: null
    }
  },
  computed:{
    ...mapGetters(['movieDirector', 'movieActors'])
  },
  methods: {
    getDirectorName () {
      axios({
        method: 'get',
        url: drf.movies.movieDirector(this.movieDirector)
      })
        .then(res => {
          this.directorName = res.data.name
        })
    },
    getDirectorUrl () {
      axios.get(URL_BASE + `/person/${this.movieDirector}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        this.directorUrl = BASIC_URL_FOR_IMAGE + res.data.profile_path
      })
    },
  },
  created () {
    this.getDirectorName(),
    this.getDirectorUrl()
  }
}
</script>

<style>

</style>