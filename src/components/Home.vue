<script setup>

</script>

<template>
 
</template>
<script>
    import axios from 'axios';
export default {
  data(){
    return{
        selectedMovie:null,
        movieList:[]
    }
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=2b24ba56d7cced960b52aa5d062f497e&language=en-US"
      )
      .then((response) => {
        this.selectedMovie = response.data
        console.log(this.selectedMovie)

      });
  },
};

</script>
