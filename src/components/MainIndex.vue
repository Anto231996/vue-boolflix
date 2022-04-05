<template>
<main>
    <div class="container-fluid p-5">
        <div class="row">
            <div id="card" class="col-6 col-sm-4 col-lg-2 mb-5 rounded-3" v-for="(movie, index) in movies" :key="index" >
                <div id="overlay">
                    <img class="img-fluid rounded-3" v-if="movie.poster_path !== null" :src="'http://image.tmdb.org/t/p/w500' + movie.poster_path " :alt="movie.title">
                    <div id="decription-card" class="text-white">
                        <h6>Title: {{movie.original_title}}</h6>
                        <h6>Overview: {{movie.overview}}</h6>
                        <h6>Average: {{Math.floor(movie.vote_average)}}</h6>
                        <div v-if="movie.original_language === 'en'">Language: <country-flag country='gb' size="small"/></div>
                        <div v-else-if="movie.original_language === 'ja'">Language: <country-flag country='jp' size="small"/></div>
                        <div v-else>Language: <country-flag :country="movie.original_language" size="small"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>


<script>
export default {
    name: 'MainIndex',
    props:["movies"]
}
</script>


<style lang="scss">
main{
    padding-top: 100px ; 

    div#overlay{
        transition: all .3s ease-in-out;
    }

    div#overlay:hover{
        transform: scale(1.1) ;
        box-shadow: 0 0 15px rgb(0, 0, 0);
    }

    div#overlay:hover img{
        filter: opacity(25%);
    }

    div#overlay:hover div#decription-card{
        display: block;
        height: 80%;
        overflow-y: auto;
        padding: 15px;
    }

    div#decription-card{
        position: absolute;
        top: 5%;
        display: none;
    }
} 
</style>