<template>
  <div>
    <div class="fixed-top">
      <b-navbar toggleable="lg" type="dark" variant="info">
        
        <b-navbar-brand :to="{ name: 'MovieMain' }" class="success">Logo</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse  class="justify-content-end" id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav>
              <search-bar></search-bar>

              <!-- <b-form-input inline size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->


            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
  
<script>
import SearchBar from '@/components/navbar/SearchBar.vue'


export default {
  name: 'NavBar',
  components : {
    SearchBar
  },
}
</script>

<style>

</style>