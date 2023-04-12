<script setup lang="ts">
import { ref, onMounted } from "vue";
import Player from "xgplayer";
import {useIntersectionObserver } from "@vueuse/core";

const isShow = ref(false);
// 大屏实例
const big = ref<HTMLDivElement>()
onMounted(() => {
  let player = new Player({
    id: "mse",
    url: "/123.mp4",
    poster:'/favicon.ico',
    fluid: true
  });
  // 监听元素是否在可视区
  const { stop } = useIntersectionObserver(
    big, 
    ([{ isIntersecting }]) => {
      isShow.value = isIntersecting;
      console.log(isIntersecting)
    }
  );
});
</script>

<template>
  <div id="small"></div>
  <div ref="big" class="def-video">
    <teleport :disabled="isShow" to="#small">
      <div id="mse"></div>
    </teleport>
  </div>
  <div style="height: 2000px"></div>
</template>

<style lang="less" scoped>
.def-video {
  width: 800px;
  height: 450px;
}
#mes{
  height:100%;
}
#small {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 200px;
}
</style>
