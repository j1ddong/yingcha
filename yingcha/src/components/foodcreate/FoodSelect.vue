<template>
  <div id="nav">
    <div class="menu-nav">
      <form action="">
        <input type="text" v-model="keyword" placeholder="검색되는 음식만 선택 가능합니다." 
        @keyup="searchKeyword(keyword)">
      </form>
    </div>
  </div>
</template>

<script>
// import drf from '@/api/drf'
import { mapActions } from 'vuex'

export default {
  name: 'FoodSelect',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    ...mapActions(['searchKeyword'])
    }
}

</script>

<style>

</style>