<template>
  <div id="nav" class="mb-2">
    <div class="menu-nav">
      <form @submit.prevent="inputFood">
        <!-- {{ action }} -->
        <!-- {{ foodPk }} -->
        <label for="input" class="fw-bold me-3 fs-5">🍜 음식</label>
        <input type="text" v-model="apple" :placeholder="placeholder" 
        @keyup.space="inputFood"
        value="inputSelectedValue" id="input" class="border-main-color s-200">
      </form>
    </div>
    <div id="resultUl" style="display: none;">
      <ul v-show="!!foods" v-for="food in foods" :key="food.id" class="p-0">
        <li @click="[saveOnInput(food.id), emitFoodId()]" 
        :id="`selectedTitle${food.id}`" class="list-unstyled my-2"> 
        🔎 {{ food.food_name }}</li>
      </ul>
      <ul id="noneText" v-if="isEmpty(foods)">
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
  name: 'FoodSelect',
  data() {
    return {
      apple: '',
      inputSelectedValue : '',
      selectedFoodId: '',
      placeholder: '',
    }
  },
  props: {
    action: String,
    foodId: Number,
  },
  computed: {
    ...mapGetters(['foods', 'foodTitle', 'isAuthor',])
  },
  methods: {
    ...mapActions(['searchFood', 'getFoodTitle',]),
    // searchFood () {
    //   console.log('search food') //이것도 ok
    //   console.log(this.keyword) // undefined
    //   this.searchKeyword(this.keyword)
    // }
    inputFood() {
      const resultUl = document.querySelector('#resultUl')
      if (resultUl.style.display === 'none') {
      // console.log(resultUl.style.display)
        resultUl.style.display = 'block'
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
      this.inputSelectedValue = selectedTitle.innerText
      // console.log(this.inputSelectedValue)

      // 3. 클릭한 음식 title 출력
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
    emitFoodId(){
      // console.log(`emitmovieid ${this.selectedMovieId}!!`)
      this.$emit('emit-food-id', this.selectedFoodId)
    }
    // showNone() {
    //   const searchList = document.querySelector('#noneText')
    //   searchList.style.visibility = "visible"
    // }
    },
    created () {
      // console.log(this.foodPk) //ok
      if (this.action === 'update') {
        // selectedFoodId로 음식이름 불러오고(store에 접근)
        this.getFoodTitle(this.foodId)
        // this.placeholder에 해당 음식이름 저장
        // console.log(this.foodTitle)
        this.placeholder = this.foodTitle.food_name
      } else {
        this.placeholder = '🔎 검색되는 음식만 선택 가능합니다.'
      }
    }
}

</script>

<style>
.s-200 {
  width: 250px;
  height: 30px;
}
</style>