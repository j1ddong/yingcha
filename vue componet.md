[TOC]



# vue componet

## 1. (main page =>) MovieMainView.vue

>  url: /            name: .vue앞에 거랑 동일하게 쓰기

```html
<div>
  <h1>
    박스오피스 순위
    <movie-list-box></movie-list-box>
  </h1>
  <h1>
    천만 영화 순위
    <movie-list2></movie-list>
  </h1>
	....
</div>
```

### component 

1. nav bar (로고, 검색, 로그인, 회원가입) => NavBar.vue
2. carousel (클릭 시 음식 디테일로 연결) => MainCarousel.vue
3. 박스 오피스 순위 [영화 포스터,이름] => MovieListBox.vue => MovieListBoxItem.vue
4. 천만 영화 순위 [영화 포스터, 이름] =>MovieListPopular.vue => MovieListPopularItem.vue
5. 평균 별점 높은 순위 [영화 포스터, 이름] => MovieListBest.vue => MovieListBestItem.vue
6. 장르별 영화 (액션, 공포, 로맨스 등등) [영화 포스터, 이름] => MovieListGenre.vue => MovieListGenreItem.vue

## 2. FoodDetailView.vue

> url: /food/:foodPk

### component

1. nav bar
2. 음식이름[영화 포스터, 이름, 작성하기]  => FoodMovieList.vue => FoodMovieListItem.vue
3. article > v-for로 유저가 작성한 게시글 하나씩 => FoodMovieArticleList.vue => FoodMovieArticleItem.vue 

## 2-1 FoodCreateView.vue

> url: /article/new

1. navbar
2. 음식 선택 => FoodSelect.vue
3. 영화 선택 => MovieSelect.vue
4. 제목 / 내용/ [취소 등록] => FoodCreateForm.vue

## 2-2 FoodEditView.vue => neo 코드 참고

> url: /article/:articlepk/edit

1. navbar
2. 음식 선택 => FoodSelect.vue
3. 영화 선택 => MovieSelect.vue
4. 제목 / 내용/ [취소 등록] => FoodCreateForm.vue

## 2-3 유저가 쓴 아티클 디테일 => ArticleDetailview.vue

> url: /article/:articlepk

1. navbar
2. 제목/내용 => ArticleContent.vue
3. 음식 사진 영화 사진 => ArticleImage.vue 

## 3. MovieDetailView.vue

> url: /movie/:moviepk

### component

1. navbar
2. 포스터랑 개봉연도 등 디테일이 있는 컴포넌트 [별점 줄 수 있는 곳] => MovieDetail.vue
3. 출연, 제작 => MovieProduct.vue => MovieProductItem.vue [감독> 배우 순으로 Item]
4. 코멘트 => MovieComment.vue => MovieCommentItem.vue [좋아순 정렬] => 더보기 클릭 시 모든 코멘트 페이지로 렌더링
5. 잘 맞는 음식 => MovieDetailFood.vue => MovieDetailFoodItem.vue
6. 비슷한 작품 => MovieDetailRecommendList.vue =>MovieDetailRecommendItem.vue

## 3-1 영화에 쓰인 댓글 목록 => MovieDetailCommentsView.vue

> url: /movie/:moviepk/comments

1. 코멘트 => MovieComment.vue => MovieCommentItem.vue



## 4. UserLogin.vue

> v-show / navbar안에 있는 컴포넌트입니다 / 모달로 구현

https://zinisang.tistory.com/97?category=985253



## 5. UserSignup.vue

> v-show / navbar안에 있는 컴포넌트입니다 / 모달로 구현

https://django-allauth.readthedocs.io/en/latest/installation.html



## 6. profileView.vue

> url: /:username

1. 프로필 컴포넌트 => Profile.vue
2. 내가 선택한 조합 => CombinationList.vue  => CombinationItem.vue [더보기에서는 다 보여주기]
3. 내가 좋아요한 조합 => LikeCombinationList.vue => CombinationItem.vue 
4. 좋아한 코멘트 => LikeCommentList.vue => LikeCommentItem.vue

## 6-1 선택한 조합 => ProfileCombinationView.vue

> url: /:username/combination

1. CombinationList.vue  => CombinationItem.vue

## 6-2 내가 좋아요한 조합 => ProfileLikeCombinationView.vue

> url: /:username/likecombination

1. LikeCombinationList.vue => CombinationItem.vue 

## 6-3 좋아한 코멘트 => ProfileLikeCommentsView.vue

> url: /:username/likecomments

1. LikeCommentList.vue => LikeCommentItem.vue

