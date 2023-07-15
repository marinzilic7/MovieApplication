<template>
  <div>
    <div :style="getBackgroundStyle()" class="moviePoster">
      <div class="aboutMovie">
        <div class="imageMovie">
          <img :src="getImageUrl(singleMovie.poster_path)" alt="" />
        </div>
        <div class="detailsMovie">
          <h2>{{ singleMovie.title }}</h2>
          <p>{{ singleMovie.overview }}</p>

          <div class="endDetails">
            <p>{{ getReleaseYear(singleMovie.release_date) }}</p>
            <div class="runTime">
              <p>{{ singleMovie.runtime }} min</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock endDetailsSVG"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                />
                <path
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                />
              </svg>
            </div>
            <div class="voteTime">
              <p>{{ getFormattedVoteAverage(singleMovie.vote_average) }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill sTar"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
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
    getImageUrl(path) {
      if (path) {
        return "https://image.tmdb.org/t/p/original" + path;
      }
      return "";
    },
    getReleaseYear(date) {
      if (date) {
        const releaseDate = new Date(date);
        return releaseDate.getFullYear();
      }
      return "";
    },

    getFormattedVoteAverage(voteAverage) {
      if (typeof voteAverage === "number") {
        return voteAverage.toFixed(1);
      }
      return "";
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100%;
  height: 400px;
  flex-wrap: wrap;
}

.moviePoster::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0.7;
}

.moviePoster h2 {
  position: relative;
  z-index: 1;
}

.aboutMovie {
  display: flex;
  justify-content: center;
  gap: 20px;
  letter-spacing: 1.3px;
  width: 50%;
}

.imageMovie img {
  width: 288px;
  height: 432px;
  position: relative;
  z-index: 1;
}

.detailsMovie {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.detailsMovie p {
  position: relative;
  text-align: justify;
}

.endDetails {
  color: #fff;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-between;
}

.runTime {
  display: flex;
  align-items: center;
  gap: 5px;
}

.endDetailsSVG {
  color: #fff !important;
  position: relative;
  bottom: 8px;
}

.voteTime{
    display: flex;
    gap:5px;
    
}

.sTar{
    position: relative;
    z-index: 1;
    color:yellow;
    top:2.5px;
    
}
</style>
