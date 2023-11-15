<template>
  <div id="app">
    <Header/>
    <Main />
    <router-view/>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
export default Vue.extend({
  name: 'HomeView',
  components: {
    Header,
    Main,
    Footer
  },
});
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
