<template>
  <div>
    <h2 class="text-left fw-bold mt-5 mb-4"> 사용자들이 선택한 조합 </h2>
    <!-- <p>{{ foodArticles.length }}</p> -->
    <div id="foodArticlesForList">
      <food-movie-article-item 
        v-for="foodArticle in pagenatedArticles"
        :key="foodArticle.pk"
        :foodArticle="foodArticle"
        id="foodArticleItem`${currentPage}`"
      ></food-movie-article-item>
    
    </div>

    <div class="overflow-auto mt-4">
      <!-- Use text in props -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="foodArticlesForList"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @page-click="pageClick"
      >
      
      </b-pagination>
    </div>
  </div>
</template>

<script>
import FoodMovieArticleItem from '@/components/fooddetail/FoodMovieArticleItem.vue'


export default {
  name: 'FoodMovieArticleList',
  components :{
    FoodMovieArticleItem,
  },
  props : {
    foodArticles: Array,
  },
  data() {
      return {
        rows: this.foodArticles.length, // 전체 아티클 개수
        perPage: 5,  // 페이지당 몇개의 아티클을 노출할건지
        currentPage: 1,  // 현재 몇페이지인지(이것도 계산해야 할듯?) , 처음에 1부터 보여주기
        pagenatedArticles: Array,
      }
  },
  methods :{
    // 해당 페이지 번호를 클릭을 하면
    // 가져온 데이터의 (현재 페이지)*(페이지 당 보여줄 아티클 수) -4 ~ (현재 페이지+1)*(페이지 당 보여줄 아티클 수)
    pageClick() {
      // console.log('a') // ok
      console.log(this.currentPage)
      const articles = this.foodArticles
      const start = (this.currentPage-1)*this.perPage
      console.log(start)
      // console.log(articles)
      this.pagenatedArticles = articles.slice(start, start+this.perPage)
      // console.log(this.pagenatedArticles)
      console.log(this.pagenatedArticles)
    }
  },
  created() {
    this.rows = this.foodArticles.length // ok
    const articles = this.foodArticles
    // const startPage = document.querySelector('#foodArticleItem1')
    // console.log(startPage)
    this.pagenatedArticles = articles.slice(0, this.perPage)
    console.log(this.pagenatedArticles)
    // const a = document.querySelectorAll('button.page-link')
    // console.log(a)
    // a.addEventListener("click", this.showArticles)
    }
  }

</script>

<style>

</style>