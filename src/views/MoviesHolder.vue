<template>
    <div class="movies-container">
      <Movie v-for="movie in filteredMovies" :key="movie.title" :movie="movie" class="movie-item" />
    </div>
  </template>
  
  <script lang="ts">
    import Movie from '@/components/Movie.vue';
    import Vue from 'vue';

    interface MovieData {
      title: string;
      genre: string;
      description: string;
      fullDescription: string;
      duration: string;
      imdbRating: number;
      releaseYear: number;
      url: string;
    }
  
    export default Vue.extend({
        name: 'MoviesHolder',
    data(): { listOfMovies: MovieData[] } {
        return {  
           
            listOfMovies: [
                {
                    title: "Pulp Fiction",
                    genre: "Crime",
                    description: "Action & Adventure",
                    fullDescription:
                        "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
                    duration: "2h 34min",
                    imdbRating: 8.9,
                    releaseYear: 1994,
                    url: "Some url link",
                },
                {
                    title: "Bohemian Rhapsody",
                    genre: "Documentary",
                    description: "Drama, Biography, Music",
                    fullDescription: "",
                    duration: "2h 34min",
                    imdbRating: 8.9,
                    releaseYear: 2003,
                    url: "Some url link",
                },
                {
                    title: "Kill Bill: Vol 2",
                    genre: "Crime",
                    description: "Oscar winning Movie",
                    fullDescription: "",
                    duration: "",
                    imdbRating: 8.9,
                    releaseYear: 2002,
                    url: "Some url link",
                },
                {
                    title: "Avengers: War of Infinity",
                    genre: "Sci-Fi",
                    description: "Action & Adventure",
                    fullDescription: "",
                    duration: "",
                    imdbRating: 8.9,
                    releaseYear: 2007,
                    url: "Some url link",
                },
                {
                    title: "Inception",
                    genre: "Action",
                    description: "Action & Adventure",
                    fullDescription: "",
                    duration: "",
                    imdbRating: 8.9,
                    releaseYear: 2001,
                    url: "Some url link",
                },
                {
                    title: "Reservoir dogs",
                    genre: "Crime",
                    description: "Oscar winning Movie",
                    fullDescription: "",
                    duration: "",
                    imdbRating: 8.9,
                    releaseYear: 1994,
                    url: "Some url link",
                },
            ],
        };
    },

    computed: {
        filteredMovies(): MovieData[] {
            if(!this.$route.params.id || this.$route.params.id === 'All') {
                return this.listOfMovies;
            }
            return this.listOfMovies.filter((movie) => movie.genre === this.$route.params.id);
           
        },
    },
        components: { Movie }
    
    });
  </script>
  
  <style scoped>

.movies-container {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin: 20px 35px;
}

.movies-container__movie-item {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}
  </style>
  