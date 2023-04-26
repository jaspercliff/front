<template>
    <el-card class="box-card">
        <template #header>
            <h3>Search github User</h3>
            <div class="card-header">
                <span><input type="text"
                             placeholder="enter the name you search"
                             v-model= "keyWord"
                >
                </span>
                <button @click="searchUsers">search</button>
            </div>
        </template>
    </el-card>
<!--    show user list-->
    <div v-show="users.values.length" class="image-container">
        <div v-for="user in users.values" :key="user.login" class="image">
            <a :href="user.html_url">
                <img :src="user.avatar_url" style="width: 90px;height:90px">
            </a>
            <p>{{user.login}}</p>
        </div>
    </div>
<!--    show welcome-->
    <h1 v-show="isFirst">welcome use</h1>
<!--    show loading-->
    <h1 v-show="isLoading">loading </h1>
<!--    show errorMsg-->
    <h1 v-show="errMsg">{{errMsg}}</h1>
</template>

<script setup>
import {reactive,ref} from "vue";
import axios from "axios";

const users = reactive([])
const keyWord = ref()
const isFirst = ref(true)
const isLoading = ref(false)
const errMsg = ref()

function searchUsers(){
    axios.get(`https://api.github.com/search/users?q=${keyWord.value}`).then
    (
        response =>{
            console.log("query success",response.data.items)
            users.values = response.data.items
            isFirst.value = false;
            errMsg.value=''
        },
    ).catch(
        error =>{
        console.log('query failed',error.message)
            isFirst.value = false;
            errMsg.value = error.message;
    })
}
</script>


<style>
.image-container{
    display: flex;
    flex-wrap: wrap;
}
.image-container > img {
    flex-basis: 200px;
    max-width: 100%;
}
@media screen and (min-width: 768px) {
    .image-container > img {
        flex-basis: calc(25% - 20px);
        /* 25% - 20px：4个图片容器占据整个容器的宽度，每个图片容器之间有20像素的间隔 */
        max-width: 100%;
    }
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-card {
    width: 100%;
}
</style>

