<script setup></script>

<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide mt-5 Carousel"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <img
          :src="moviePosterBackground"
          class="d-block movieBackground"
          alt="..."
        />
        <div class="carousel-caption d-md-block posterTitle">
          <h5>{{ titlePoster }}</h5>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img
          :src="moviePosterBackground2"
          class="d-block movieBackground"
          alt="..."
        />
        <div class="carousel-caption d-md-block posterTitle">
          <h5>{{ titlePoster2 }}</h5>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img
          :src="moviePosterBackground3"
          class="d-block movieBackground"
          alt="..."
        />
        <div class="carousel-caption d-md-block posterTitle">
          <h5>{{ titlePoster3 }}</h5>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next nextButton"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <h1 class="movies">Movies</h1>
  <section class="moviesSection">
   
    <div class="card movieCard" v-for="movie in testMovie" :key="movie.id"  style="width: 18rem">
      <img :src="getImageUrl(movie.poster_path)" class="card-img-top" />
      <div class="card-body movieCardBody">
        <h5 class="card-title">{{ movie.title }}</h5>
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
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedMovie: null,
      movieTitle: [],
      moviePosters: [],
      randomNumber: null,
      moviePosterBackground: null,
      moviePosterBackground2: null,
      moviePosterBackground3: null,
      moviePoster: null,
      moviePoster2: null,
      titlePoster: "",
      titlePoster2: "",
      titlePoster3: "",
      testMovie: null,
      soloPoster: null,
    };
  },
  created() {
    this.randomNumber = Math.floor(Math.random() * 20);
    console.log(this.randomNumber);
    this.randomNumber2 = Math.floor(Math.random() * 20);
    console.log(this.randomNumber2);
    this.randomNumber3 = Math.floor(Math.random() * 20);

    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US"
      )
      .then((response) => {
        this.selectedMovie = response.data.results;
        this.testMovie = response.data.results;

        console.log(this.selectedMovie);

        for (let index = 0; index < this.selectedMovie.length; index++) {
          const element = this.selectedMovie[index];
          console.log(element.title);
          this.movieTitle.push(element.title);
          this.moviePosters.push(element.backdrop_path);
          console.log(this.moviePosters);

          /*   const singleMovie = this.selectedMovie[1]; 
         this.testMovie = singleMovie.poster_path
         this.testMovie = `https://image.tmdb.org/t/p/original${this.testMovie}`; */

          this.moviePoster =
            this.selectedMovie[this.randomNumber].backdrop_path;
          this.moviePosterBackground = `https://image.tmdb.org/t/p/original${this.moviePoster}`;
          this.moviePoster = this.selectedMovie[this.randomNumber];
          this.titlePoster = this.moviePoster.title;

          this.moviePoster2 =
            this.selectedMovie[this.randomNumber2].backdrop_path;
          this.titlePoster2 = this.moviePoster2.title;
          this.moviePosterBackground2 = `https://image.tmdb.org/t/p/original${this.moviePoster2}`;
          this.moviePoster2 = this.selectedMovie[this.randomNumber2];
          this.titlePoster2 = this.moviePoster2.title;

          this.moviePoster3 =
            this.selectedMovie[this.randomNumber3].backdrop_path;
          this.titlePoster3 = this.moviePoster3.title;
          this.moviePosterBackground3 = `https://image.tmdb.org/t/p/original${this.moviePoster3}`;
          this.moviePoster3 = this.selectedMovie[this.randomNumber3];
          this.titlePoster3 = this.moviePoster3.title;
        }
      });
  },
  methods: {
    getImageUrl(path) {
      if (path) {
        return "https://image.tmdb.org/t/p/original" + path;
      }
      return "";
    },
  },
};
</script>

<style scoped>
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

.marinItems{
    display: flex;
    align-items: center;
    gap:7px;
}
.marinItems svg{
    display: flex;
    position: relative;
    bottom:9px;
    color:yellow;
}

.movies{
  color:#fff;
  margin-top:20px;
  margin-left:30px;
}

.moviesSection{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
  }

@media only screen and (max-width: 600px) {
  .Carousel {
    width: 100%;
  }
  .movieBackground {
    height: 370px;
    width: 330px;
    position: relative;
    left: 10% !important;
  }
  .posterTitle h5 {
    position: relative;
    top: 30px;
    font-size: 20px;
  }

  .movieCard{ 
    display: flex;
    justify-content: space-evenly !important;
    margin-top:5rem;;
    height: 191px !important;
    width: 128px !important;
    font-size: 15px;
  }

  .movieCard h5{
    font-size: 12px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap;
  }

  .movieCardBody{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    width:130%;
    position: relative;
    right:17px;
  }

  .moviesSection{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
  }

  
}
</style>
