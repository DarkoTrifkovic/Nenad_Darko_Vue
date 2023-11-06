<template>
  <div id="app">
    <Header></Header>
    <SearchBar></SearchBar>
    <NumberHandler></NumberHandler>
    <Movies></Movies>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import Header from './components/Header.vue'
import Movies from '@/components/Movies.vue'
import NumberHandler from './components/NumberHandler.vue';
export default {
  components: {
    Header,
    SearchBar,
    Movies,
    NumberHandler
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
