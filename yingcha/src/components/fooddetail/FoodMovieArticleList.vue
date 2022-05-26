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
      <b-pagination class="pagination"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="foodArticlesForList"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
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
  watch : {
    currentPage (newValue) {
      const articles = this.foodArticles
      const start = (newValue-1)*this.perPage
      this.pagenatedArticles = articles.slice(start, start+this.perPage)
    }
  },
  created() {
    this.rows = this.foodArticles.length // ok
    const articles = this.foodArticles
    this.pagenatedArticles = articles.slice(0, this.perPage)
    }
  }

</script>

<style>
.pagination {
  justify-content: center;
}
</style>