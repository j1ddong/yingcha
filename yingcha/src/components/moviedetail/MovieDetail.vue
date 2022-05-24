<template>
  <div>
    <h1>{{ movieDetail.title }}</h1>
    <img :src="movieDetail.posterUrl" alt="moviePoster">
    <p>상영시간: {{movieDetail.run_time}}</p>
    <p>기본정보: {{ movieDetail.description }}</p>
    {{ movieDetail.release_date }}
    <p>장르: {{ movieDetail.genres }}</p>
    {{ movieDetail.original_title }}
    <p>now streamig: {{ movieDetail.providers }}</p>  
    <!-- 빈 배열이면 안나오게 lodash도움 받아서 고치기 -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'MovieDetail',
  computed: {
    ...mapGetters(['movieDetail']),
  },
}
</script>

<style>

</style>