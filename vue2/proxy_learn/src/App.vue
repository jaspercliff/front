<script setup>
import axios from "axios";
function  getName(){
    axios.get("greeting?name='jasper'").then(
        response =>{
            console.log("get success!!!",response.data)
        },
        error =>{
            console.log("get failed!!!!",error.message)
        }
    )
}
</script>

<template>
  <button @click="getName">get name</button>
</template>

<style scoped>

</style>
