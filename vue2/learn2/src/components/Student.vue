<template>
  <div class="demo">
      This is student Component <br>
      name:{{name}} <br>
      ageL{{age}} <br>
      Mouse position is at: {{ x }}, {{ y }}
  </div>

</template>

<script setup>
const name = "jasper"
const age = 20
import {useMouse} from "@/mouse";
const {x,y} = useMouse();
</script>

<style scoped >
  .demo{
      background-color: aqua;
  }
</style>