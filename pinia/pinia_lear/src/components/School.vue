<script setup>
  import {useCountStore} from "@/store/count";
  import axios from 'axios'
  const store = useCountStore()
  function change(){
      store.$patch({
          name:'cliff',
          count:20
      })
  }
  // 类似watch
  store.$subscribe((mutation,state)=>{
      // console.log(mutation)
      // console.log(state)
      if(mutation.type==='direct'){
          console.log('the value is changed direct')
          console.log(mutation.events.oldValue+'--'+mutation.events.newValue)
      }
  })
//   onAction
  store.$onAction(({
                       name, // action 名称
                       store, // store 实例，类似 `someStore`
                       args, // 传递给 action 的参数数组
                       after, // 在 action 返回或解决后的钩子
                       onError, // action 抛出或拒绝的钩子
                   })=>{
      console.log(name);
      console.log(store);
      console.log(args);


      // 将在action完成并完全运行后触发
      after(async (result)=>{
          await axios.get('https://api.uixsj.cn/hitokoto/get?type=hitokoto&code=json')
              .then(response=>{
                  console.log('get success!!!',response.data)
                  console.log(response.data.content)
              })
          console.log("complete!!!!!!!!!!!!!!!"+result);
      })
      onError((error)=>{
          console.log("fucking error"+error)
      })
  })

</script>

<template>
<h1>hello jasper cliff</h1>
<!--  state-->
count:{{store.count}}
<!--    action-->
  <button @click="store.increment()">click me to make count ++</button>
    <br>
<!--  getter-->
  doublecount:{{store.doubleCount}}
    <hr>
  name:{{store.name}}
    <hr>
  <button @click="change">click it to change all store state</button>
</template>

<style scoped>

</style>