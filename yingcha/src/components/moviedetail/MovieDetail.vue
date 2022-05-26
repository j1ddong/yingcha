<template>
  <div class="d-flex">
    <img :src="posterUrl" alt="moviePoster">
    <div class="d-flex flex-column">
      <h1 class="item movie-margin"><strong>{{ movieDetail.title }}</strong></h1>
    <div class="my-3 movie-margin">
      <p class="item"> 개봉일: {{ movieDetail.release_date }}</p>
      <p class="item">장르: {{ genre }}</p>
      <p class="item">{{ movieDetail.original_title }}</p>
      <span class="item">now streamig: {{ provider }}</span>
    </div>
    <div class="mt-5 movie-margin">
      <h4>줄거리</h4>
      <p>{{ movieDetail.description }}</p>
    </div>
    </div>  
    <!-- 빈 배열이면 안나오게 lodash도움 받아서 고치기 -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MovieDetail',
  computed: {
    ...mapGetters(['movieDetail',]),
    posterUrl () {
      return 'https://image.tmdb.org/t/p/w400' + this.movieDetail.poster_url
    },
    genre () {
      return this.movieDetail.genres.map(genre => {
        return genre.name
      })
    },
    provider () {
      return this.movieDetail.providers.map(provider => {
        return provider.name
      })
    }
  },
}
</script>

<style>
.movie-margin {
  margin: 50px 0 50px 50px;
}
</style>