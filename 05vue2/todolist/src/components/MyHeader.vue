<template>
    <div class="common-layout">
       <el-input v-model="input" placeholder="Please input your fucking item" clearable @keyup.enter="add"/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
// ref接收一个值，返回一个响应式的可更改的ref对象 此对象只要一个指向其内部值的属性.value
// ref对象是可更改的 你可以为 .value 赋予新的值。
// 它也是响应式的，即所有对 .value 的操作都将被追踪，并且写操作会触发与之相关的副作用
import {nanoid} from "nanoid";

const emit=defineEmits(['addItem'])
function add(e) {
    // console.log(e.target.value)
    const todo = {id:nanoid(),title:e.target.value,done:false}
    console.log(todo);
    // 在子组件触发一个convey事件 并传递todo
    emit('addItem',todo)
}

</script>

<style scoped>

</style>