<template>
  <div>
    <h1>error test,{{}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      error:"test error"
    }
  },
  methods:{
    doSomeThing(){
      doSomeThingElse();
    }
  }
}
</script>