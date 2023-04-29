<template>
<div>
    <button @click="isShow=!isShow">show or hide</button>
    <transition name="hello" appear>
        <h1 v-show="isShow">hello haha</h1>
    </transition>
</div>
</template>

<script setup>
import {ref} from "vue";

const isShow = ref();

</script>

<style scoped>
  h1{
      background-color: orange;
  }
  .hello-enter-active{
      animation: hCome 1s;
  }
  .hello-leave-active{
      animation: hCome 1s reverse;
  }
  @keyframes hCome {
      from{
          transform: translateX(-100%);
      }
      to{
          transform: translateX(0px);
      }
  }
</style>