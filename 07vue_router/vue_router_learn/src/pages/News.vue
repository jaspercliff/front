<script>
//Also - if you use script setup you need to add another <script>
// tag above <script setup> and export default { name: 'MoviesList' },
// because it doesn't work otherwise. script setup doesn't set component names explicitly
export default {
    name:'News'
}
</script>
<script setup>
    import {onBeforeUnmount} from "vue";

    onBeforeUnmount(()=>{
        console.log('news unmounted')
    })
</script>

<template>
<ul>
    <li>new1    <input type="text"></li>

    <li>new2 <input type="text"></li>
    <li>new3 <input type="text"></li>

</ul>
</template>

<style scoped>

</style>