<template>
  <button @click="count++">you clicked me {{count}} times !!!</button>
</template>

<script>
export default {
    name: "Button",
    data(){
        return{
            count:0
        }
    }
}
</script>

<style scoped>

</style>