<template>
  <div>
    <p>감독: {{ directorName }}</p>
    <img :src="directorUrl" alt="directorImage">
    <movie-actor v-for="name in ActorName" :key="name" :name="name"></movie-actor>
    <movie-actor v-for="url in ActorUrl" :key="url" :url="url"></movie-actor>
  </div>
</template>

<script>
import MovieActor from '@/components/moviedetail/MovieActor.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
// import drf from '@/api/drf'


const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/original'


export default {
  name: 'MovieProduct',
  components: {
    MovieActor
  },
  props: {
    director: Number,
    actor: Array
  },
  data () {
    return {
      directorName: null,
      directorUrl: null,
      ActorName: [],
      ActorUrl: [],
    }
  },
  computed:{
    ...mapGetters(['movieDirector', 'movieActors'])
  },
  methods: {
    // getDirectorName () {
    //   axios({
    //     method: 'get',
    //     url: drf.movies.movieDirector()
    //   })
    //     .then(res => {
    //       this.directorName = res.data.name
    //     })
    // },
    getDirectorUrl () {
      axios.get(URL_BASE + `/person/${this.movieDirector}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
      .then(res => {
        this.directorUrl = BASIC_URL_FOR_IMAGE + res.data.profile_path
      })
    },
    // getActorName () {
    //   axios({
    //     method: 'get',
    //     url: drf.movies.movieActor()
    //   })
    //     .then(res => {
    //       this.ActorName.push(res.data.name)
    //     })
    // },
    getActorUrl () {
      this.movieActors.forEach(actor => {
        axios.get(URL_BASE + `/person/${actor}`, {params: {'api_key': API_KEY, 'language': 'ko' }})
          .then(res => {
          this.ActorUrl.push(BASIC_URL_FOR_IMAGE + res.data.profile_path)
        })
      })
    }
  },
  created () {
    // this.getDirectorName(),
    this.getDirectorUrl(),
    // this.getActorName(),
    this.getActorUrl()
  }
}
</script>

<style>

</style>