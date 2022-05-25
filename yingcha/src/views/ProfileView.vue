<template>
  <div>
    <h1>{{ profile.username }}</h1>

    <h2>내가 선택한 조합</h2>
    <ul>
      <li v-for="article in profile.article_set" :key="article.pk">
        <router-link :to="{ name: 'ArticleDetail', params: { articlepk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>

    <h2>내가 좋아한 조합</h2>
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
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>
