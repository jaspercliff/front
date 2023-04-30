<script setup>


const props = defineProps({
  id:String,
    title:String
})
</script>

<template>
  <ul>
      <li>
<!--          id:{{this.$route.params.id}}-->
          id:{{id}}
      </li>
      <li>
          title:{{title}}
      </li>
  </ul>
</template>

<style scoped>

</style>