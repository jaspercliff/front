<template>
<!--  @item-del="handleDel"-->
            <MyItem v-for="todo in todos" :key="todo.id" :todo="todo" @item-check="handleCheck" />
</template>

<script setup>
import MyItem from "@/components/MyItem.vue";

const props = defineProps({
    todos:'',
})
const emit = defineEmits(['listCheck','listDel'])

function handleCheck(todoId){
    // console.log(todoId)
    emit("listCheck",todoId);
}
// function handleDel(todoId){
//     // console.log(todoId)
//     emit("listDel",todoId);
// }
</script>

<style scoped>

</style>