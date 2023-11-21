<template>
  <div class="movies-container__movie-item">
    <div class="movies-container__movie-details">
      <h2 class="movies-container__movie-title">{{ movie.title }}</h2>
      <p class="movies-container__movie-description">{{ movie.description }}</p>
      <p class="movies-container__movie-genre">{{ movie.genre }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface IMovie {
  title: string;
  description: string;
  genre: string;
}

// type TMovie = {
//   title: string,
//   description: string,
//   genre: string
// }

export default Vue.extend({
  name: "MovieComponent",
  props: {
    movie: {
      type: Object as () => IMovie,
      required: true,
    },
  },
});
</script>
