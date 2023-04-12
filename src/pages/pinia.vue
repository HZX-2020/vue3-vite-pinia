<template>
<div class="content">
  <h1>商品数量：{{store.count}}</h1>
  <a-button @click="add">+1</a-button>
  <a-button @click="resetState">重置状态</a-button>
</div>
</template>

<script setup lang='ts'>
import {ref, reactive, toRefs, onMounted} from 'vue'
import {storeToRefs }from 'pinia'
import useMainStore from "../store/index"

const store = useMainStore()
let { count } = storeToRefs(store)


function add() {
  // store.count ++
  count.value++
}
function resetState() {
  store.$reset()
}
onMounted(()=> {

})

</script>

<style scoped lang='less'>
  .content{
    display: flex;
    justify-content: center;
  }
</style>