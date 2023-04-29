<template>
<div>
    <h1>当前求和为{{sum}}</h1>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addOdd">奇数在加</button>
    <button @click="addWait">等一等在加</button>
</div>
</template>

<script setup>
    import {ref} from "vue";
    const n = ref(1);
    const sum = ref(0);
    function add(){
        sum.value += n.value;
    }
    function sub(){
        sum.value -= n.value;
    }
    function addOdd(){
        if(sum.value%2){
            sum.value+=n.value;
        }
    }
    function addWait(){
        setTimeout(()=>{
            sum.value+=n.value
        },500)
    }
</script>

<style scoped>

</style>