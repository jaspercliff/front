<template>
<h1>here is a child component!!!!</h1>
  <Button/>
</template>

<script>
import Button from "./Button.vue";
export default {
    name: "ButtonCounter",
    components:{
        Button
    }
}
</script>

<style scoped>

</style>