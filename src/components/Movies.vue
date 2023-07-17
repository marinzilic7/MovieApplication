<template>
  <div>
    <section class="moviesSection">
    <div
      class="card movieCard"
      v-for="movie in movies"
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
            {{ movie.vote_average }}
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
    <ul class="pagination d-flex justify-content-center ">
      <li class="page-item " :class="{ disabled: currentPage === 1 }">
        <a class="page-link custom-pagination" href="#" @click.prevent="previousPage">Previous</a>
      </li>
      <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ active: currentPage === pageNumber }"
      >
        <a class="page-link custom-pagination  " href="#" @click.prevent="goToPage(pageNumber)">{{
          pageNumber
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link custom-pagination" href="#" @click.prevent="nextPage">Next</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
      currentPage: 1,
      totalPages: 10,
      itemsPerPage: 10,
    };
  },
  created() {
    this.fetchMovies(this.currentPage);
  },
  methods: {
    fetchMovies(page) {
      const api_key = "2b24ba56d7cced960b52aa5d062f497e";
      const language = "en-US";
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=${language}&page=${page}`;

      axios
        .get(url)
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((error) => {
          console.error("Greška pri dohvaćanju podataka:", error);
        });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchMovies(this.currentPage);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchMovies(this.currentPage);
      }
    },
    goToPage(pageNumber) {
      if (pageNumber !== this.currentPage) {
        this.currentPage = pageNumber;
        this.fetchMovies(this.currentPage);
      }
    },
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
};
</script>

<style scoped>

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

.custom-pagination {
  background-color: #121212;
  color:#fff;
  border: 1px solid #969292;
}

    


</style>
