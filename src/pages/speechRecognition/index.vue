<template>
  <div class="container">
    <div>
      <a-button type="primary" @click="start">开始识别</a-button>
      <a-button type="danger" @click="close">停止</a-button>
    </div>
    <div class="text-box">语音识别结果：{{ speechText }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
const speechText = ref("");
const recognition = new window.webkitSpeechRecognition();
onMounted(() => {});
const start = () => {
  recognition.start();
};
const close = () => {
  recognition.stop();
};
recognition.onresult = function (e) {
  // console.log('语音识别结果：',e.results[0][0].transcript);
  speechText.value = e.results[0][0].transcript;
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 50px;
  .text-box {
    margin-top: 20px;
    width: 500px;
    height: 600px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 8px 8px 5px 1px #e4e4e4;
  }
}
</style>
