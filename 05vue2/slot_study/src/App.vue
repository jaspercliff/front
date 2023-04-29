<script setup>
import Category from "@/components/category.vue";
import { reactive} from "vue";
const foods = reactive(['火锅','tea','steak'])
const games = reactive(['1','2','3'])
const films = reactive(['4','5','6'])

</script>

<template>
    <div class="container">
        <Category  title="foods" :listData="foods">
            <template #main>
                <img src="./assets/img.png" alt="" >
            </template>
            <template #footer="slotProps">
                {{slotProps.nameH}}======{{slotProps.count}}
            </template>
        </Category>
<!--        <Category title="games">-->
<!--            <template #main>-->
<!--                <ul v-for="(item,index) in games " :key="index">-->
<!--                    <li>{{ item }}</li>-->
<!--                </ul>-->
<!--            </template>-->

<!--        </Category>-->
<!--        <Category title="films">-->
<!--            <template #main>-->
<!--                <video controls src="./assets/moto.mp4"></video>-->
<!--            </template>-->
<!--        </Category>-->
    </div>
</template>

<style scoped>
  .container{
      display: flex;
      /*项目在主轴的对齐方式*/
      justify-content: space-around;
  }
  img{
      width: 100%;
      max-height: 40%;
  }
  video{
      max-width: 100%;
      max-height: 100%;
  }
</style>
