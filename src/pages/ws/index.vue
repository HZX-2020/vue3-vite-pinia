<template>
<div class="box">
  <a-input v-model:value="message"></a-input>
  <a-button>发送</a-button>
  <div class="content">{{message}}</div>
</div>
</template>

<script setup lang='ts'>
import {ref, reactive, toRefs, onMounted} from 'vue'
let message = ref<string>('')
onMounted(()=> {
  message.value = '111'
})

</script>

<style scoped lang='less'>
  .box{
    padding:40px;
    .content{
      width: 100px;
      height: 100px;
      border:1px solid #e4e4e4;
    }
  }
</style>