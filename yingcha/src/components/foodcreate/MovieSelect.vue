<template>
  <div id="nav">
    <div class="menu-nav">
      <form @submit.prevent="inputKeyword">
        <input type="text" v-model="apple" placeholder="검색되는 영화만 선택 가능합니다." 
        @keyup.space="inputKeyword"
        value="inputSelectedValue" id="input">
      </form>
    </div>
    <div id="resultUl" style="display: none;">
      <ul v-show="!!keywords" v-for="keyword in keywords" :key="keyword.id">
        <li @click="saveOnInput(keyword.id)" :id="`selectedTitle${keyword.id}`"> {{ keyword.title }}</li>
      </ul>
      <ul id="noneText" v-if="isEmpty(keywords)">
        <!-- <li>{{ keywords }}</li> -->
        <li>검색 결과가 없습니다.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'MovieSelect',
  data() {
    return {
      apple: '',
      inputSelectedValue : '',
      selectedMovieId: ''
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
    inputKeyword() {
      const resultUl = document.querySelector('#resultUl')
      if (resultUl.style.display === 'none') {
      // console.log(resultUl.style.display)
        resultUl.style.display = 'block'
        this.searchKeyword(this.apple)
      } else {
        this.searchKeyword(this.apple)
      }
    },
    saveOnInput(id) {
      // 1. 클릭한 영화 id 저장
      this.selectedMovieId = id
      // console.log(this.selectedMovieId)

      //2. 클릭한 영화 title 저장
      const selectedTitle = document.querySelector(`#selectedTitle${id}`)
      // console.log(selectedTitle)
      this.inputSelectedValue = selectedTitle.innerText
      // console.log(this.inputSelectedValue)

      // 3. 클릭한 영화 title 출력
      const input = document.querySelector('#input')
      input.value = this.inputSelectedValue
      // console.log(selectedTitle.innerText)
      const resultUl = document.querySelector('#resultUl')
      // console.log(resultUl.style)
      resultUl.style.display = 'none'
    },
    isEmpty(value) {
      return _.isEmpty(value)
    },
    // showNone() {
    //   const searchList = document.querySelector('#noneText')
    //   searchList.style.visibility = "visible"
    // }
    }
}

</script>

<style>

</style>