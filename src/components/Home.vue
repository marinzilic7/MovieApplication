<script setup></script>

<template>
  <div id="carouselExampleCaptions" class="carousel slide mt-5">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner ">
      <div class="carousel-item active ">
        <img :src="moviePosterBackground" class="d-block movieBackground" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ titlePoster }}</h2>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="moviePosterBackground2" class="d-block movieBackground" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ titlePoster2 }}</h2>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="moviePosterBackground3" class="d-block  movieBackground" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h2>{{ titlePoster3 }}</h2>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedMovie: null,
      movieTitle: [],
      moviePosters:[],
      randomNumber:null,
      moviePosterBackground:null,
      moviePosterBackground2:null,
      moviePosterBackground3:null,
      moviePoster:null,
      moviePoster2: null,
      titlePoster:'',
      titlePoster2:'',
      titlePoster3:'',
      
    };
  },
  created() {
    this.randomNumber =  Math.floor(Math.random() * 20);
    console.log(this.randomNumber)
    this.randomNumber2 =  Math.floor(Math.random() * 20);
    console.log(this.randomNumber2)
    this.randomNumber3 =  Math.floor(Math.random() * 20);
    
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US"
      )
      .then((response) => {
        this.selectedMovie = response.data.results;
        
        console.log(this.selectedMovie)

        for (let index = 0; index < this.selectedMovie.length; index++) {
          const element = this.selectedMovie[index];
          console.log(element.title);
          this.movieTitle.push(element.title);
          this.moviePosters.push(element.backdrop_path)
          console.log(this.moviePosters)

          this.moviePoster = this.selectedMovie[this.randomNumber].backdrop_path
          this.moviePosterBackground = `https://image.tmdb.org/t/p/original${this.moviePoster}`;
          this.moviePoster= this.selectedMovie[this.randomNumber];
          this.titlePoster = this.moviePoster.title
       

          this.moviePoster2 = this.selectedMovie[this.randomNumber2].backdrop_path
          this.titlePoster2 = this.moviePoster2.title
          this.moviePosterBackground2 = `https://image.tmdb.org/t/p/original${this.moviePoster2}`;
          this.moviePoster2= this.selectedMovie[this.randomNumber2];
          this.titlePoster2 = this.moviePoster2.title


          this.moviePoster3 = this.selectedMovie[this.randomNumber3].backdrop_path
          this.titlePoster3 = this.moviePoster3.title
          this.moviePosterBackground3 = `https://image.tmdb.org/t/p/original${this.moviePoster3}`;
          this.moviePoster3= this.selectedMovie[this.randomNumber3];
          this.titlePoster3 = this.moviePoster3.title
           

         
        }
      });
  },
}
</script>

<style scoped>
    .movieBackground{
        width:55%;
        height: 500px;
       position: relative;
       left:23%;
       
    }

    

   
    
</style>