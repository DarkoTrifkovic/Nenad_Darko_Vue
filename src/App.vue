<template>
  <div id="app">
    <Header></Header>
    <SearchBar></SearchBar>
    <NumberHandler></NumberHandler>
    <Tabs />
    <Movies></Movies>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import Header from './components/Header.vue'
import Movies from '@/components/Movies.vue'
import NumberHandler from './components/NumberHandler.vue';
import Tabs from './components/Tabs.vue';
export default {
  components: {
    Header,
    SearchBar,
    Movies,
    NumberHandler,
    Tabs
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
