<template>
  <div class="movie-nav">
    <router-link
      v-for="genre in listOfGenres"
      :key="genre"
      :to="`/genre/${genre}`"
      :class="{
        'movie-nav__link--active': $route.params.id === genre,
        'movie-nav__link': true,
      }"
      >{{ genre }}</router-link
    >
  </div>
</template>

<script lang="ts">
interface IGenres {
  listOfGenres: string[];
}

import Vue from "vue";

export default Vue.extend({
  name: "MovieTabs",
  data(): IGenres {
    return {
      listOfGenres: ["All", "Action", "Crime", "Sci-Fi", "Documentary"],
    };
  },
});
</script>

<style scoped>
.movie-nav {
  background-color: #232323;
  padding: 20px;
  margin: 20px 40px;
}

.movie-nav__link {
  color: #fff;
  margin: 10px;
  text-decoration: none;
}

.movie-nav__link--active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
