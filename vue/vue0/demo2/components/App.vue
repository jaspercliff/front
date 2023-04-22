<template>
    <div>
        <ButtonCounter/>
        <User/>
    </div>
</template>

<script setup>
import ButtonCounter from "./ButtonCounter.vue";
import User from "./User.vue";
export default {
    name: "App",
    components:{
        ButtonCounter,
        User
    }
}
</script>

<style scoped>

</style>