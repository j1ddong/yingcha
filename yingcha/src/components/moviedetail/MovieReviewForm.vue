<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="reivew" class="fs-5 fw-bold me-3 mb-3">💌 리뷰 작성하기 </label>
      <div class="d-flex">
        <div class="star-rating space-x-4 m">
          <input type="radio" id="5-stars" name="rating" value="5" v-model="newComment.voteAverage" @click="changeText"/>
          <label for="5-stars" class="star pr-4">★</label>
          <input type="radio" id="4-stars" name="rating" value="4" v-model="newComment.voteAverage" @click="changeText"/>
          <label for="4-stars" class="star">★</label>
          <input type="radio" id="3-stars" name="rating" value="3" v-model="newComment.voteAverage" @click="changeText"/>
          <label for="3-stars" class="star">★</label>
          <input type="radio" id="2-stars" name="rating" value="2" v-model="newComment.voteAverage" @click="changeText"/>
          <label for="2-stars" class="star">★</label>
          <input type="radio" id="1-star" name="rating" value="1" v-model="newComment.voteAverage" @click="changeText"/>
          <label for="1-star" class="star">★</label>
        </div>
        <div>
          <input type="text" v-model="newComment.content" 
          :placeholder="text" class="border-main-color ms-3">
          <button>Review</button>
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
  methods: {
    ...mapActions(['createReview']),
    onSubmit() {
      this.createReview({ moviePk: this.moviePk, voteAverage: this.newComment.voteAverage, content: this.newComment.content, })
      this.newComment.voteAverage = null
      this.newComment.content = null
    },
    changeText () {
      switch (this.newComment.voteAverage) {
        case 0:
          this.text = "💤 싫어요"
          break
        case "1":
          this.text = "💢 별로예요"
          break
        case "2":
          this.text = "👌 보통이에요"
          break
        case "3":
          this.text = "👍 재미있어요"
          break
        case "4":
          this.text = "💯 최고예요"
          break
      }
    }
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
</style>