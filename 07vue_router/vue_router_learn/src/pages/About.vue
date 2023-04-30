<script setup>
import {onBeforeUnmount, onMounted} from "vue";
import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";
onMounted(()=>{
    console.log('about component is  mounted!!!!!')
})
  // onBeforeUnmount(()=>{
  //     console.log('about component is going to unmounted!!!!!')
  // })
  onBeforeRouteLeave((to,from,next)=>{
      alert('update')
  })
</script>

<template>
  <h1>i am about component </h1>
    <router-link to="/about/news">news</router-link>
    <br>
    <router-link to="/about/message">message</router-link>
    <router-view v-slot="{ Component }">
        <keep-alive include="News">
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<style scoped>

</style>