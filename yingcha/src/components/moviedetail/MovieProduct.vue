<template>
  <div>
    <p>감독: {{ movieDirector.name }}</p>
    <img :src="directorUrl" alt="directorImage">
    <movie-actor v-for="actor in movieActors" :key="actor" :actor="actor"></movie-actor>
  </div>
</template>

<script>
import MovieActor from '@/components/moviedetail/MovieActor.vue'
import { mapGetters } from 'vuex'
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
    directorUrl: null
    }
  },
  computed:{
    ...mapGetters(['movieDirector', 'movieActors'])
  },
  methods: {
    getDirectorUrl () {
      axios.get(URL_BASE + `/person/${this.movieDirector.id}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        this.directorUrl = BASIC_URL_FOR_IMAGE + res.data.profile_path
      })
    },
  },
  created () {
    this.getDirectorUrl()
  }
}
</script>

<style>

</style>