<template>
  <div class="d-flex mt-5">
    <img :src="posterUrl" alt="moviePoster" class="b-radius">
    <div class="ms-4 mb-5">
      <h2 class="item mt-4 fw-bold">{{ movieDetail.title }} </h2>
      <h5 class="item ms-1 mt-3 fw-bold f-opaque">{{ movieDetail.original_title }}</h5>
      <hr style="width:200px;" class="mb-4">
      <div class="my-3 movie-margin">
        <div class="d-flex">
          <p class="item fw-bold fs-5 me-3"> 💎 개봉일 </p>
          <p class="fs-5">{{ movieDetail.release_date }}</p>
        </div>
        <div class="d-flex">
          <p class="item fw-bold fs-5 me-3">💎 장르</p>
          <p class="item fs-5" 
            v-for="(item,index) in genre" :key="index"
          >{{ item }} /</p>
        </div>
        <div>
          <p class="item fw-bold fs-5 mb-3">💎 시청 가능 플랫폼</p>
          <p class="fs-5 ms-3 mt-1"
            v-for="(item, index) in provider" :key="index">⚡ {{ item }}</p>
        </div>
      </div>
    <div class="mt-4 movie-margin">
      <h4 class="fw-bold fs-5">💎 줄거리</h4>
      <p class="ms-2">{{ movieDetail.description }}</p>
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
  .f-opaque {
    color: rgb(0,0,0, 0.4)
  }
</style>