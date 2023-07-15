<template>
  <div>
    <div :style="getBackgroundStyle()" class="moviePoster">
      <h2>{{ singleMovie.title }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: null,
      singleMovie: [],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getSingleMovie();
  },
  methods: {
    getSingleMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.id}?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US`
        )
        .then((response) => {
          this.singleMovie = response.data;
          console.log(this.singleMovie);
        });
    },
    getBackgroundStyle() {
      return {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${this.singleMovie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "870px",
      };
    },
  },
};
</script>

<style scoped>
h2,
p {
  color: #fff;
}

ul {
  color: #fff;
}
.moviePoster {
  position: relative;
  width: 100%;
  height: 400px;
}

.moviePoster::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1.0);
  opacity: 0.7;
}

.moviePoster h2 {
  position: relative;
  z-index: 1;
}

</style>
