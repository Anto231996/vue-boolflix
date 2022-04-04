<template>
  <div id="app">
    <HeaderIndex @search="searchMovies"/>
    <MainIndex/>
  </div>
</template>

<script>
import HeaderIndex from './components/HeaderIndex.vue'
import MainIndex from './components/MainIndex.vue'
import axios from 'axios';

export default {
  name: 'App',

  components: {
    HeaderIndex,
    MainIndex
  },

  data: function(){
    return{
      moviesList: null,
    }
  },

  created: function(){
    this.getApiMovies()
  },


  methods:{
    getApiMovies(){
      axios
      .get('https://api.themoviedb.org/3/search/movie?api_key=d1f1993bda434baf07364c9d1c9fefa7&query=')
      .then((result)=>{
      this.moviesList = result.data.original_title
        console.log(this.moviesList);
      })
      .catch((error)=>{
        console.log(error)
      })
    },  
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>