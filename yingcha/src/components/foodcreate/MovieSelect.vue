<template>
  <div id="nav" class="mb-2">
    <div class="menu-nav">
      <form @submit.prevent="inputKeyword">
        <label for="inputMovie" class="fw-bold me-3 fs-5">🎭 영화</label>
        <input type="text" v-model="apple" :placeholder="placeholder" 
        @keyup.space="inputKeyword"
        value="inputSelectedMovieValue" id="inputMovie" class="border-main-color s-200">
      </form>
    </div>
    <div id="resultMovieUl" style="display: none;">
      <ul v-show="!!keywords" v-for="keyword in keywords" :key="keyword.id">
        <li @click="[saveOnMovieInput(keyword.id), emitMovieId()]" 
        :id="`selectedMovieTitle${keyword.id}`" class="list-unstyled my-2"
        >🔎 {{ keyword.title }}</li>
      </ul>
      <ul id="noneText" v-if="isEmpty(keywords)">
        <!-- <li>{{ keywords }}</li> -->
        <li class="list-unstyled my-2">🔎 검색 결과가 없습니다.</li>
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
      inputSelectedMovieValue : '',
      selectedMovieId: '',
      placeholder: '',
  }
  },
  props: {
    action: String,
    movieId: Number,
  },
  computed: {
    ...mapGetters(['keywords', 'movieTitle',])
  },
  methods: {
    ...mapActions(['searchKeyword', 'getMovieTitle',]),
    // searchFood () {
    //   console.log('search food') //이것도 ok
    //   console.log(this.keyword) // undefined
    //   this.searchKeyword(this.keyword)
    // }
    inputKeyword() {
      const resultMovieUl = document.querySelector('#resultMovieUl')
      // console.log(resultMovieUl.style.display)
      if (resultMovieUl.style.display === 'none') {
      // console.log(resultMovieUl.style.display)
        resultMovieUl.style.display = 'block'
        // console.log('changed')
        this.searchKeyword(this.apple)
      } else {
        this.searchKeyword(this.apple)
      }
    },
    saveOnMovieInput(id) {
      // 1. 클릭한 영화 id 저장
      this.selectedMovieId = id
      // console.log(this.selectedMovieId)

      //2. 클릭한 영화 title 저장
      const selectedMovieTitle = document.querySelector(`#selectedMovieTitle${id}`)
      // console.log(selectedMovieTitle)
      this.inputSelectedMovieValue = selectedMovieTitle.innerText
      // console.log(this.inputSelectedMovieValue)

      // 3. 클릭한 영화 title 출력
      const inputMovie = document.querySelector('#inputMovie')
      inputMovie.value = this.inputSelectedMovieValue
      // console.log(selectedMovieTitle.innerText)
      const resultMovieUl = document.querySelector('#resultMovieUl')
      // console.log(resultMovieUl.style)
      resultMovieUl.style.display = 'none'
    },
    isEmpty(value) {
      return _.isEmpty(value)
    },
    emitMovieId(){
      // console.log(`emitmovieid ${this.selectedMovieId}!!`)
      this.$emit('emit-movie-id', this.selectedMovieId)
    }
    // showNone() {
    //   const searchList = document.querySelector('#noneText')
    //   searchList.style.visibility = "visible"
    // }
    },
    created () {
      // console.log(this.foodId) //ok
      if (this.action === 'update') {
        // selectedFoodId로 음식이름 불러오고(store에 접근)
        this.getMovieTitle(this.movieId)
        // this.placeholder에 해당 음식이름 저장
        // console.log(this.foodTitle)
        this.placeholder = this.movieTitle.title
      } else {
        this.placeholder = '🔎 검색되는 영화만 선택 가능합니다.'
      }
    }
}

</script>

<style>

</style>