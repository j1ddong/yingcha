<template>
  <div id="nav">
    <div class="menu-nav">
      <form action="">
        <input type="text" v-model="apple" placeholder="검색되는 음식만 선택 가능합니다." 
        @keyup.space="searchKeyword(apple)" @keyup.enter="searchKeyword(apple)">
      </form>
    </div>
    <ul v-for="keyword in keywords" :key="keyword.id">
      <li> {{ keyword.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'FoodSelect',
  data() {
    return {
      apple: '',
    }
  },
  computed: {
    ...mapGetters(['keywords'])
  },
  methods: {
    ...mapActions(['searchKeyword']),
    // searchFood () {
    //   console.log('search food') //이것도 ok
    //   console.log(this.keyword) // undefined
    //   this.searchKeyword(this.keyword)
    // }
    }
}

</script>

<style>

</style>