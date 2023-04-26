<script setup>
import MyHeader from "@/components/MyHeader.vue";
import MyList from "@/components/MyList.vue";
import MyFooter from "@/components/MyFooter.vue";
import {ref, watchEffect} from 'vue';
import ownMitt from "@/mitt";
import {onUnmounted} from "vue";
// 我们使用 ref 函数将 todos 定义为一个响应式对象。在 add 方法中，我们使用 todos.value 来访问实际的数组，
// 并使用 unshift 方法将 todo 添加到数组的开头。由于 todos 是一个响应式对象，当其中的值发生变化时，视图会自动更新
const todos = ref([
    {id: '001', title: 'eat', done: true},
    {id: '002', title: 'smoke', done: false},
    {id: '003', title: 'drink', done: true}
])

watchEffect(
    ()=>{
        sessionStorage.setItem('items',JSON.stringify(todos.value));
    }
)
/**
 * add task
 * @param todo
 */
function handleAdd(todo) {
    console.log(todo);
    todos.value.unshift(todo)
}

/**
* 勾选task
*/
function handleCheck(todoId) {
    console.log(todoId);
    /**
     *   check whether is done
     */
    todos.value.forEach((todo) => {
        if (todo.id === todoId) {
            todo.done = !todo.done
            console.log(todo.done)
        }
    })
}

/**
 * del task
 */
function handleDel(todoId) {
    console.log("handleDel")
    // console.log(todoId)
    todos.value = todos.value.filter(todo => todo.id !== todoId)
}
ownMitt.on("itemDelete",handleDel)
// onUnmounted(()=>{
//     ownMitt.off("itemDelete",handleDel)
// })
/**
 * checkAll
 */
function handleCheckAll(isChecked) {
    todos.value.forEach((todo) => {
        todo.done = isChecked;
    })
}

/**
 * delete all items
 */
function handleDeleteAll(){
    console.log("handleDeleteAll")
    todos.value = todos.value.filter((todo)=>{
        return !todo.done
    })
}


ownMitt.on("itemEdit",(event)=>{
    const [id, title] = event.detail;
    console.log(id);
    console.log(title);
    todos.value.forEach(
        (todo)=>{
            if(todo.id===id){
                todo.title = title
            }
        }
    )
})


onUnmounted(()=>{
    ownMitt.off("itemEdit")
})

</script>

<template>
    <h1>to-do-list</h1>
  <!--    在父组件使用@指令来监听该事件-->
    <MyHeader @addItem="handleAdd"/>
<!--    @list-del="handleDel"-->
    <MyList :todos="todos" @listCheck="handleCheck" />
    <MyFooter :todos="todos" @check-all="handleCheckAll" @delete-all="handleDeleteAll"/>
</template>

<style scoped>

</style>
