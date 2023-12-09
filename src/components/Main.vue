<template>
    <div class="main">
      <SearchBar />
      <TabsComponent />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import SearchBar from './SearchBar.vue';
  import TabsComponent from './Tabs.vue';
  
  export default defineComponent({
    name: 'MainComponent',
    components: {
    SearchBar,
    TabsComponent,
  },
  });
  </script>
  