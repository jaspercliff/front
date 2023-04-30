<script setup>
// import {inject} from "vue";
// setup() 函数被设计为无副作用函数，即不应该修改组件实例 所有不能访问this
// const router = inject('router')
import {useRouter} from "vue-router";

const router = useRouter()
function back(){
    console.log(router)
    router.back()
}
function forward(){
    router.forward()
}
function back2(){
    router.go(-2)
}
</script>

<template>
<h1>hello i am banner component</h1>
  <button @click="back">back</button>
  <button @click="forward">forward</button>
  <button @click="back2">back -2 (go)</button>
</template>

<style scoped>

</style>