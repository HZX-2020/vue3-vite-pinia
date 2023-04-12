<template>
<div class="alert">
  Alert弹框
</div>
</template>

<script setup lang='ts'>


</script>

<style scoped lang='less'>
  .alert{
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    padding: 10px 20px;
    border-radius: 8px;
    background: #08ca08;
    color: #fff;
  }
</style>