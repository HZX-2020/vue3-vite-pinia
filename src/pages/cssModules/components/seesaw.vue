<template>
<div class="container">
  <div class="board">
    <div class="ball"></div>
  </div>
  
</div>
</template>

<script setup lang='ts'>
import {ref, reactive, toRefs, onMounted} from 'vue'

onMounted(()=> {

})

</script>

<style scoped lang='less'>
  .container {
    width: 100%;
    height: 100%;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    .board {
      width: 50%;
      height: 15px;
      border-radius: 50%;
      background: #fff;
      .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #fff;
      }
    }
    
  }
</style>