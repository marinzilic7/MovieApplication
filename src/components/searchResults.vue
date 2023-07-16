<template>
  
  <section class="moviesSection">
    <div
      class="card movieCard"
      v-for="movie in results"
      :key="movie.id"
      style="width: 18rem"
    >
      <img
        :src="getImageUrl(movie.poster_path)"
        class="card-img-top"
        @click="redirectToFilm(movie.id)"
      />
      <div class="card-body movieCardBody">
        <p class="card-title">{{ movie.title }}</p>
        <div class="marinItems">
          <p class="card-text">
            {{ movie.vote_average.toFixed(1) }}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      searchResults: []
    }
  },
  props: {
    results: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImageUrl(path) {
      if (path) {
        return "https://image.tmdb.org/t/p/original" + path;
      }
      return "";
    },
    redirectToFilm(movie) {
      this.$router.push({ name: "singleMovie", params: { id: movie } });
    },
  },
 
  
  // ...
};
</script>

<style scoped>

h2, ul{
  color:#fff;
}
.movieBackground {
  width: 55%;
  height: 500px;
  position: relative;
  left: 23%;
}

.moviesSection {
  margin-top: 50px;
  color: #fff;
}

.moviesSection h1 {
  margin-left: 30px;
}

.movieCard {
  border: none;
  margin-left: 30px;
  margin-top: 30px;
}

.movieCardBody {
  display: flex;
  justify-content: space-between;
  background-color: #121212;
  color: #fff;
}

.marinItems {
  display: flex;
  align-items: center;
  gap: 7px;
}
.marinItems svg {
  display: flex;
  position: relative;
  bottom: 9px;
  color: yellow;
}

.movies {
  color: #fff;
  margin-top:2rem;
  margin-left: 2.5rem;
}

.moviesSection {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
</style>
