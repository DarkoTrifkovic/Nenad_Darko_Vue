<template>
    <div class="header">
      <SearchBar/>
      <Tabs />
    </div>
  </template>
  
  <script lang="ts">
import Vue from 'vue';
import SearchBar from './SearchBar.vue';
import Tabs from './Tabs.vue';

export default Vue.extend({
  name: 'HelloWorld',
  components: {
    SearchBar,
    Tabs,
},

});
  </script>
  

  