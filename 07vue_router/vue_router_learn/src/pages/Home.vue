<script setup>
import {onBeforeUnmount, onMounted} from "vue";
onMounted(()=>{
    console.log('home component is mounted!!!!!',this)
})
// onBeforeUnmount(()=>{
//     console.log('home component is going to unmounted!!!!!')
// })
</script>

<template>
<h1>i am home component </h1>
</template>

<style scoped>

</style>