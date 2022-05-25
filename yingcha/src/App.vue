<template>
  <div id="app">
    <nav-bar></nav-bar>
    <nav>
      <router-link :to="{ name: 'MovieMain' }">MainPage</router-link> | 
      <router-link :to="{ name: 'MovieDetail', params: {moviepk: 282631} }">Detail</router-link> |
      <router-link :to="{ name: 'FoodCreate'}">Food Create</router-link> |
      <router-link :to="{ name: 'login'}">Login</router-link> |
      <router-link :to="{ name: 'signup'}">signup</router-link> |
      <router-link :to="{ name: 'logout'}">Logout</router-link> 
      
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/navbar/NavBar.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
