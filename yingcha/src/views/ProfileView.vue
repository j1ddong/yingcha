<template>
  <div class="ms-3 mt-5">
    <h2 class="fw-bold mb-2">👨‍🍳 {{ profile.username }}님의 프로필 👩‍🍳</h2>
    <hr class="line-300 mb-5">
  
    <div>
      <h3 class="fw-bold my-3">💡 내가 선택한 조합</h3>
      <ul class="ps-0">
        <li v-for="article in profile.article_set" 
          :key="article.pk" class="list-unstyled">
          ➰ <router-link :to="{ name: 'ArticleDetail', params: { articlepk: article.pk } }"
            class="text-decoration-none text-dark fs-5 ms-2">
            🍜 {{ foodTitle.food_name }} + 🎭{{ movieTitle.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <hr>

    <h3 class="fw-bold mt-5">💡 내가 좋아하는 조합</h3>
    <ul>
      <li v-for="article in profile.like_articles" :key="article.pk">
        <router-link :to="{ name: 'ArticleDetail', params: { articlepk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile', 'foodTitle', 'movieTitle'])
  },
  methods: {
    ...mapActions(['fetchProfile', 'getFoodTitle', 'getMovieTitle',])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
    this.getFoodTitle(this.profile.food)
    this.getMovieTitle(this.profile.movie)
  },
}
</script>
<style scoped>
  .line-300 {
    width: 300px;
  }
</style>