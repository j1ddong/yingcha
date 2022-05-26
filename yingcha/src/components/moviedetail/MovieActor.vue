<template>
  <div>
    {{ actor.name }}
    <img :src="url" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import drf from '@/api/drf'
import axios from 'axios'

const API_KEY = '44f9d36b9d8fa8e880839899c577f866'
const URL_BASE = 'https://api.themoviedb.org/3'
const BASIC_URL_FOR_IMAGE = 'https://image.tmdb.org/t/p/w200'

export default {
  name: 'MovieActor',
  props: {
    actor: Object
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
    getActorUrl () {
      axios.get(URL_BASE + `/person/${this.actor.id}`, {params: {'api_key': API_KEY, 'language': 'ko'}})
        .then(res => {
          this.url = BASIC_URL_FOR_IMAGE + res.data.profile_path
        })
    }
  },
  created () {
    this.getActorUrl()
  }
}
</script>

<style>

</style>