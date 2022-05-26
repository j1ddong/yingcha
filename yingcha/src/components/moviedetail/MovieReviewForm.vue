<template>
  <div class="text-start">
    <form @submit.prevent="onSubmit">
      <label for="reivew" class="fs-5 fw-bold">💌 리뷰 작성하기 </label>
      <div class="d-flex my-4 text-end">
        <div class="star-rating space-x-4">
          <input type="radio" id="5-stars" name="rating" value="5" v-model="newComment.voteAverage" />
          <label for="5-stars" class="star pr-4">★</label>
          <input type="radio" id="4-stars" name="rating" value="4" v-model="newComment.voteAverage" />
          <label for="4-stars" class="star">★</label>
          <input type="radio" id="3-stars" name="rating" value="3" v-model="newComment.voteAverage" />
          <label for="3-stars" class="star">★</label>
          <input type="radio" id="2-stars" name="rating" value="2" v-model="newComment.voteAverage" />
          <label for="2-stars" class="star">★</label>
          <input type="radio" id="1-star" name="rating" value="1" v-model="newComment.voteAverage" />
          <label for="1-star" class="star">★</label>
        </div>
        <div class="ms-3">
          <input type="text" v-model="newComment.content" 
          :placeholder="text" class="border-main-color ms-3 s-review">
          <button class="text-white p-1">저장</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'MovieReviewForm',
  data() {
    return {
      newComment: {
        voteAverage: 0,
        content: null,
      },
      text: "💌 리뷰를 작성해주세요"
    }
  },
  computed: {
    moviePk () {
      return this.$route.params.moviepk
    },
  },
  watch: {
    newComment: {
      deep: true,
      handler(newValue) {
        switch (newValue.voteAverage) {
          case "1":
            this.text = "💤 싫어요"
            break
          case "2":
            this.text = "💢 별로예요"
            break
          case "3":
            this.text = "👌 보통이에요"
            break
          case "4":
            this.text = "👍 재미있어요"
            break
          case "5":
            this.text = "💯 최고예요"
            break
        }
      }
    }
  },
  methods: {
    ...mapActions(['createReview']),
    onSubmit() {
      this.createReview({ moviePk: this.moviePk, voteAverage: this.newComment.voteAverage, content: this.newComment.content, })
      this.newComment.voteAverage = null
      this.newComment.content = null
    },
  }
}
</script>

<style>
.star-rating {
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.25rem;
  line-height: 2.5rem;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
}
 
.star-rating input {
  display: none;
}
 
.star-rating label {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2.3px;
  -webkit-text-stroke-color: #2b2a29;
  cursor: pointer;
}
 
.star-rating :checked ~ label {
  -webkit-text-fill-color: gold;
}
 
.star-rating label:hover,
.star-rating label:hover ~ label {
  -webkit-text-fill-color: gold;
}
input::placeholder {
  font-size: 16px;
}
.s-review {
  width:300px;
  height: 38px;
}
.review-border {
  border: 3px solid rgb(128,128,128,0.1);
  border-radius: 5%;
}
</style>