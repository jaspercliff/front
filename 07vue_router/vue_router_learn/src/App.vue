<script setup>
import Banner from "@/components/Banner.vue";
import {provide} from "vue";
import {router} from "@/router";

// 在根组件中提供 router 对象
// provide('router', router)
provide('router',router)
</script>

<template>
    <Banner/>
    <br>
    <router-link replace to="/about">about</router-link>
    <br>
    <router-link  to="/">home</router-link>
    <routerView></routerView>
    <hr>

</template>

<style scoped>

</style>
