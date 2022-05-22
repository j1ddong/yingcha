<template>
  <div>
    <h1>천만영화</h1>
    <p>{{popularmovies}}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieListPopular',
  props: {
    popularmovies: Array,
  }
}
</script>

<style>

</style>