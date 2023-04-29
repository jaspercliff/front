<template>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4 ">
        <li>
        <label >
        <input type="checkbox" :checked="todo.done" @click="handleCheck">
        <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input
                v-show="todo.isEdit"
                type="text"
                :value="todo.title"
                @blur="handleBlur($event)"
                ref="inputTitle"
            >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
            <el-button type="info" :icon="Edit" plain  size="small" @click="EditItem(todo)"/>
            <el-button type="danger" :icon="Delete" plain  size="small" @click="deleteItem"/>
        </li>
    </div>
</template>

<script setup>
import {nextTick, onMounted, ref} from "vue";
import { Delete,Edit} from '@element-plus/icons-vue';
import ownMitt from "@/mitt";
const props = defineProps({
    todo: Object
})
const emit=defineEmits(['itemCheck'])
function handleCheck(){
//     通知app将done取反  传递id
    emit("itemCheck",props.todo.id)
}
function deleteItem(){
    if (confirm('confirm delete fucking item')) {
        console.log(props.todo.id);
        // emit('itemDel',props.todo.id)
        // 通知app去删除item 直接传递给app
        ownMitt.emit('itemDelete',props.todo.id)
    }
}
const  inputTitle = ref();
function EditItem(){
    props.todo.isEdit = true;
    nextTick(()=>{
        inputTitle.value.focus();
    })
}
// 失去焦点回调 真正实现修改逻辑
function handleBlur(e){
    props.todo.isEdit = false;
    // console.log(e.target.value)
    ownMitt.emit('itemEdit',{ detail: [props.todo.id, e.target.value] })
}
</script>

<style scoped>
li:hover{
    background-color:#ddd;
}
li el-button{
    float: right;
}
</style>