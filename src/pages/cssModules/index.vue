<template>
  <div class="container">
    <h1>跷跷板</h1>
    <div class="board">
      <div class="ball"></div>
    </div>
    <div class="triangular"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";

onMounted(() => {});
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100vh;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .board {
    width: 20%;
    height: 15px;
    border-radius: 10px;
    background: #fff;
    transform: rotate(15deg);
    position: relative;
    animation: board-move 3s ease-in-out 1s infinite alternate;
    .ball {
      position: relative;
      bottom: 20px;
      left: calc(100% - 20px);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      animation: ball-move 3s ease-in-out 1s infinite alternate;
      &::after {
        display: block;
        position: absolute;
        left: 12px;
        top:12px;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: red;
      }
    }
  }
  .triangular {
    position: absolute;
    margin-top: 18px;
    border: 40px solid #fff;
    border-top-color:transparent; 
    border-left-color:transparent; 
    border-right-color:transparent;
  }
}
@keyframes board-move {
  from {
    transform: rotate(-15deg);
  }
  to {
    transform: rotate(15deg);
  }
}
@keyframes ball-move {
  from {
    left: calc(100 - 40px);
    transform: rotate(360deg);
  }
  to {
    left: calc(0%);
    transform: rotate(0deg);
  }
}
</style>
