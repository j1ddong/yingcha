<template>
  <div>
    <div class="top">
      <b-navbar toggleable="lg" type="dark" variant="light">
        <b-navbar-brand :to="{ name: 'MovieMain' }" type="dark" class="text-dark">
          <img src="@/image/yingcha-logo.png" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="text-dark"></b-navbar-toggle>

        <b-collapse  class="justify-content-end" id="nav-collapse" is-nav>
          <b-navbar-nav>
              <search-bar class="me-5" style="z-index:999;"></search-bar>
          </b-navbar-nav>
          <div v-if="isLoggedIn">
            <b-link :to="{ name: 'FoodCreate'}" class="link-line">작성하기</b-link>
            <b-link :to="{ name: 'profile', params: {username: currentUser.username } }" class="link-line">마이페이지</b-link>  
            <b-link :to="{ name: 'logout'}" class="link-line">로그아웃</b-link>
          </div>
          <div v-if="!isLoggedIn">
            <b-link :to="{ name: 'login'}" class="link-line">로그인</b-link>  
            <b-link :to="{ name: 'signup'}" class="link-line">회원가입</b-link>
          </div>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
  
<script>
import SearchBar from '@/components/navbar/SearchBar.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'NavBar',
  components : {
    SearchBar
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser']),
  }
}
</script>

<style>
.nav-link.dropdown-toggle {
  background: #1EC800;
}
.main-font-color {
  color: #1EC800;
}
.main-bg-color {
  background-color: #1EC800;
}
.w-120 {
  width: 120%;
}
.dropdown-menu.dropdown-menu-right {
  background-color: #1EC800;
  padding: 0;
}
.dropdown-item {
  color: white!important;
  display:inline!important;
}
.link-line {
  text-decoration-line: none;
  margin-right: 10px;
}
</style>