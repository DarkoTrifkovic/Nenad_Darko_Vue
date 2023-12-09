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
  import { defineComponent } from 'vue';
  import { IMovieData } from '../model/movieModel';
  
  export default defineComponent({
    name: 'MovieComponent',
    props: {
    movie: {
      type: Object as () => Pick<IMovieData, 'title' | 'description' | 'genre'>,
      required: true,
    },
  },
  });
  </script>
  