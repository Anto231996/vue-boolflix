<template>
<header class="container-fluid fixed-top px-5">
    <div class="row align-items-center">
        <div class="col d-flex align-items-center">
            <img id="netflix-logo-header" src="../assets/img/netflix-logo.png" alt="netlfix logo">
            <nav>
                <ul class="d-flex m-0">
                    <li class="me-3"> 
                        <a href="#">Home</a>
                    </li>
                    <li class="me-3"> 
                        <a href="#">Serie TV</a>
                    </li>
                    <li class="me-3"> 
                        <a href="#">Film</a>
                    </li>
                    <li class="me-3"> 
                        <a href="#">Nuovi e popolari</a>
                    </li>
                    <li class="me-3"> 
                        <a href="#">La mia lista</a>
                    </li>
                </ul>
            </nav>
        </div> 
        <div class="col d-flex justify-content-end">
            <input type="text" class="bg-dark bg-opacity-10 text-white" placeholder="Digita un titolo" v-model="inputText" @keydown="$emit('search', inputText)">
        </div>
    </div>
</header>
</template>


<script>
export default {
    name: 'HeaderIndex',
    data: function(){
        return{
            inputText:"",
        }
    },
}
</script>


<style lang="scss">
header.container-fluid{
    min-width: 1200px;
    background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%); 

    img#netflix-logo-header{
        width: 90px;
    }

    ul{
        list-style: none;

        a{
            text-decoration: none;
            color: white;
        }
    }
}
</style>