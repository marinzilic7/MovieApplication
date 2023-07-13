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
        <img  class="d-block movieBackground" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="" class="d-block movieBackground" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="" class="d-block  movieBackground" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
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
     

    };
  },
  created() {
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
          this.moviePoster = this.selectedMovie[1].backdrop_path
         
          /* this.moviePosterBackground = `https://image.tmdb.org/t/p/original${this.moviePoster}`;  */
         
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