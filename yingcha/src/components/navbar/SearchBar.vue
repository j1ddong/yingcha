<template>
  <div id="nav">
    <div class="menu-nav">
      <!-- <b-form class="d-flex" @submit.prevent="showFoodDetail(selectedFoodId)">
        <b-form-input type="text" v-model="apple" @keyup.space="inputSearchFood" value="inputSelectedSearchValue" id="searchInput">
        </b-form-input>     
        <b-button>검색</b-button>
      </b-form> -->
      <form @submit.prevent="showFoodDetail(selectedFoodId)">
        <input type="text" v-model="apple" placeholder="검색되는 음식만 선택 가능합니다." 
        @keyup.space="inputSearchFood"
        value="inputSelectedSearchValue" id="searchInput">
        <button>검색</button>
      </form>
    </div>
    <div id="resultSearchUl" style="display: none;">
      <ul v-show="!!foods" v-for="food in foods" :key="food.id">
        <li @click="saveOnInput(food.id)" :id="`selectedTitle${food.id}`"> {{ food.food_name }}</li>
      </ul>
      <ul id="noneText" v-if="isEmpty(foods)">
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
  name: 'SearchBar',
  data() {
    return {
      apple: '',
      inputSelectedSearchValue : '',
      selectedFoodId: ''
    }
  },
  computed: {
    ...mapGetters(['foods'])
  },
  methods: {
    ...mapActions(['searchFood']),
    inputSearchFood() {
      // console.log('input') //ok
      const resultSearchUl = document.querySelector('#resultSearchUl')
      if (resultSearchUl.style.display === 'none') {
      // console.log(resultSearchUl.style.display)
        resultSearchUl.style.display = 'block'
        // console.log(this.apple) // ok
        this.searchFood(this.apple)
      } else {
        this.searchFood(this.apple)
      }
    },
    saveOnInput(id) {
      // 1. 클릭한 음식 id 저장
      this.selectedFoodId = id
      // console.log(this.selectedFoodId)

      //2. 클릭한 음식 title 저장
      const selectedTitle = document.querySelector(`#selectedTitle${id}`)
      // console.log(selectedTitle)
      this.inputSelectedSearchValue = selectedTitle.innerText
      // console.log(this.inputSelectedSearchValue)

      // 3. 클릭한 음식 title 출력
      const input = document.querySelector('#searchInput')
      input.value = this.inputSelectedSearchValue
      // console.log(selectedTitle.innerText)
      const resultSearchUl = document.querySelector('#resultSearchUl')
      // console.log(resultSearchUl.style)
      resultSearchUl.style.display = 'none'
    },
    isEmpty(value) {
      return _.isEmpty(value)
    },
    showFoodDetail(foodPk) {
      // console.log(`this is ${foodPk}`) // ok
      this.$router.push(`/food/${foodPk}`)
      // console.log(`this is ${foodPk}`)
    }
    // emitFoodId(){
    //   // console.log(`emitmovieid ${this.selectedMovieId}!!`)
    //   this.$emit('emit-food-id', this.selectedFoodId)
    // }
    // showNone() {
    //   const searchList = document.querySelector('#noneText')
    //   searchList.style.visibility = "visible"
    // }
    }
}

</script>

<style>

</style>