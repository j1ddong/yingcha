<template>
  <div>
    {{ name }}
    <img :src="url" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import drf from '@/api/drf'
import axios from 'axios'

const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/w200'

export default {
  name: 'MovieActor',
  props: {
    actor: Number
  },
  data () {
    return {
      name: null,
      url: null
    }
  },
  computed: {
    ...mapGetters(['authHeader'])
  },
  methods: {
    getActorName () {
      axios({
        method: 'get',
        url: drf.movies.movieActor(this.actor),
        headers: this.authHeader,
      })
        .then(res => {
          this.name = res.data.name
        })
    },
    getActorUrl () {
      axios.get(URL_BASE + `/person/${this.actor}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
        .then(res => {
          this.url = BASIC_URL_FOR_IMAGE + res.data.profile_path
        })
    }
  },
  created () {
    this.getActorName(),
    this.getActorUrl()
  }
}
</script>

<style>

</style>