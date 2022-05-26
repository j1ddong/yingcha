<template>
  <div>
    <!-- {{ movieDetail}} -->
    <img class="d-inline-block" :src="posterUrl" alt="moviePoster">
    <h1 class="d-inline-block"><strong>{{ movieDetail.title }}</strong></h1>
    <span>장르: {{ movieDetail.genres }}</span>
    <span>{{ movieDetail.release_date }}</span>
    <span>{{ movieDetail.original_title }}</span>
    <span>now streamig: {{ movieDetail.providers }}</span>
    <div>
      <h4><strong>기본 정보</strong></h4>
      <p>{{ movieDetail.description }}</p>
    </div>  
    <!-- 빈 배열이면 안나오게 lodash도움 받아서 고치기 -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MovieDetail',
  computed: {
    ...mapGetters(['movieDetail', 'movieProvider']),
    posterUrl () {
      return 'https://image.tmdb.org/t/p/w200' + this.movieDetail.poster_url
    }
  },
}
</script>

<style>

</style>