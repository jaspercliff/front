<template>
  <h1>i am a school component</h1>  <br>
  name:{{name}} <br>
  address:{{address}} <br>
    <button @click="showName">click me show this.name</button>

</template>

<script>
//引入混合
import {logName} from "@/mixin";

export default {
    name: "School",
    data(){
        return{
            name:"xupt!!!!!!!!!!!!!",
            address:"changan"
        }
    },
    methods:{

    },
    // mixins 选项接受一个 mixin 对象数组。这些 mixin 对象可以像普通的实例对象一样包含实例选项
    /*data method 有相同的选项时 优先组件 但是生命周期函数会全部调用*/
    mixins:[logName]
}
</script>

<style scoped>

</style>