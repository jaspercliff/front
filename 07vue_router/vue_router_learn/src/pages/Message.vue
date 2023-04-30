<script setup>
import {inject, onBeforeUnmount, reactive} from "vue";
const router = inject('router')
const messageList = reactive(
    [
        {id: '001', title: 'message1'},
        {id: '002', title: 'message2'},
        {id: '003', title: 'message3'}
    ]
)
onBeforeUnmount(()=>{
    console.log('message unmounted')
})
function pushShow(item) {
    console.log(router);
    router.push({
        name: 'detail',
        params: {
            id: item.id,
            title: item.title
        }
    })
}

function replaceShow(item) {
    router.replace({
        name: 'detail',
        params: {
            id: item.id,
            title: item.title
        }
    })
}
</script>

<template>
    <ul>
        <li v-for="item in messageList" :key="item.id">
            <!--            query参数-->
            <!--        <router-link :to="`/about/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>-->
            <!--            <router-link :to="{-->
            <!--            name:'detail',-->
            <!--            query:{-->
            <!--                id:item.id,-->
            <!--                title:item.title-->
            <!--            }-->
            <!--        }">-->
            <!--                {{ item.title }}-->
            <!--            </router-link>-->
            <!--                                                          -->
            <!--            params 参数-->
            <!--<router-link :to="`/about/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link>-->
            <router-link :to="
            {
                // params参数不能使用path
                name:'detail',
                params:{
                    id:item.id,
                    title:item.title
                }
            }
">{{ item.title }}
            </router-link>
            <button @click="pushShow(item)">push</button>
            <button @click="replaceShow(item)">replace</button>
        </li>
    </ul>
    <hr>
    <router-view></router-view>
</template>

<style scoped>

</style>