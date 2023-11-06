<template>
    <div class="movie-item">
        <div class="movie-details">
            <h2 class="movie-title">{{ movie.title }}</h2>
            <p class="movie-description">{{ movie.description }}</p>
            <p class="movie-genre">{{ movie.genre }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        movie: Object
    }
}
</script>
