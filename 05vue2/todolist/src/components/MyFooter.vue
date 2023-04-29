<template>
    <div>
        <input type="checkbox" v-model="isAll">
        <span><span>completed:{{ completed }}</span> /total:{{ total }}</span> &nbsp; &nbsp;&nbsp;&nbsp;
        <el-button type="danger" size="small" @click="deleteItems">delete all</el-button>
    </div>
</template>

<script setup>
import {computed} from "vue";
// 接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 ref 通过 .value 暴露 getter 函数的返回值。
const props = defineProps(['todos'])
const total = computed(() => {return props.todos.length})
const completed = computed(
    () => {return props.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)}
)

const isAll = computed({
    get:()=>total.value === completed.value && total.value > 0,
    set:(checked)=> emit("checkAll",checked)
})


const emit = defineEmits(["checkAll","deleteAll"])
/**
 * delete all
 */
function deleteItems(){
    confirm("sure delete all?")
    emit("deleteAll")
}
</script>

<style scoped>

</style>