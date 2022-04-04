<template>
<header class="container-fluid">
    <div class="row justify-content-between align-items-center">
        <div class="col-2">
            <h1 class="text-danger text-uppercase fw-bold">boolflix</h1>
        </div>
                
        <div class="col-2 d-flex align-items-center">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Titoli" v-model="inputText" @keyup.enter="$emit('search', 'inputText')">
                <button class="btn btn-outline-secondary bg-secondary text-black" type="button">Cerca</button>
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
    }

}
</script>

<style lang="scss">
header.container-fluid{
    background-color: black;
    height: 80px;

    div.row{
        height: 100%;
    }
}
</style>