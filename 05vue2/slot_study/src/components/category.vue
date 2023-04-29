<template>
    <div class="category">
        <h3>{{ props.title }}分类</h3>
        <slot name="main" >default main</slot>
        <slot name="footer" :nameH="nameH" count="1" >default footer</slot>
    </div>
</template>

<script setup>
    import {onMounted} from "vue";
    const nameH = "hello ,this is so fucking handsome jasper"
    const props =defineProps({
        listData: {
            type: Array,
            required: true
        },
        title:{
            type:String
        }
    })
    onMounted(
        ()=>{
            console.log(props.title)
        }
    )
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
</style>