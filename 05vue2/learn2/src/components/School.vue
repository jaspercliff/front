<template>
  <div class="demo">
      This is school component <br>
      name:{{name}} <br>
      age:{{address}} <br>
      Mouse position is at: {{ x }}, {{ y }}
  </div>

</template>

<script  setup>
const name='xupt';
const address = "changan"
import {useMouse} from "@/mouse";
const {x,y} = useMouse();
</script>

<style scoped>
    .demo{
        background-color: violet;
    }
</style>