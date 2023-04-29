<template>
    <h3>i am User component</h3>
    <div>
        name:{{name}} <br>
        age:{{age}}
    </div>
</template>

<script>
export default {
    name: "User",
    data(){
        return{
            name:"jasper",
            age:"15",
        }
    }
}
</script>

<style scoped>

</style>