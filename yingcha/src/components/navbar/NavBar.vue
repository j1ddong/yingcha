<template>
  <div>
    <div class="top">
      <b-navbar toggleable="lg" type="dark" variant="light">
        <b-navbar-brand :to="{ name: 'MovieMain' }" type="dark" class="text-dark">
          <img src="@/image/yingcha-logo.png" alt="logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="text-dark"></b-navbar-toggle>

        <b-collapse  class="justify-content-end" id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav>
              <search-bar class="me-5" style="z-index:999;"></search-bar>

              <!-- <b-form-input inline size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->


            <b-nav-item-dropdown right >
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <span class="me-3">User</span>
              </template>
              <div>
                <b-dropdown-item href="#" class="my-1">내 프로필</b-dropdown-item>
                <b-dropdown-item href="#" class="my-1">로그아웃</b-dropdown-item>
              </div>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
  
<script>
import SearchBar from '@/components/navbar/SearchBar.vue'
// import image from '../../../public/yingcha_logo.png'

export default {
  name: 'NavBar',
  components : {
    SearchBar
  },
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
</style>