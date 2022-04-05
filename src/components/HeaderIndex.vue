<template>
<header class="container-fluid fixed-top px-5">
    <div class="row align-items-center">
        <div class="col">
            <img id="netflix-logo-header" src="../assets/img/netflix-logo.png" alt="netlfix logo">
        </div> 
        <div class="col">
            <div class="input-group justify-content-end">
                <input type="text" class="bg-dark text-white" placeholder="Digita un titolo" v-model="inputText" @keydown="$emit('search', inputText)">
            </div>
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
    background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%); 


    img#netflix-logo-header{
        width: 90px;
    }
}
</style>