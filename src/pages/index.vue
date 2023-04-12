<template>
  <div class="container" @mousemove="getMouseLocal" ref="containerRef">
    <div class="item one" :style="{ '--rx': rx, '--ry': ry }">
      <router-link to="/teleport" class="link">teleport</router-link>
      <div class="des">
        把一个元素传送到另一个元素下
      </div>
    </div>
    <div class="item two" :style="{ '--rx': rx, '--ry': ry }">
      <router-link to="/pinia">pinia</router-link>
      <div class="des">
        新一代的状态管理工具
      </div>
    </div>
    <div class="item" :style="{ '--rx': rx, '--ry': ry }">
      <router-link to="/shop">购物车</router-link>
      <i class="iconfont icon-a-gouwuchegouwu"></i>
      <div class="des">
        购物车
      </div>
    </div>
    <div class="item" :style="{ '--rx': rx, '--ry': ry }">
      <router-link to="/editor">wangEditor</router-link>
      <img src="https://www.wangeditor.com/image/logo.png" width="40" alt="">
      <div class="des">
        富文本编辑器
      </div>
    </div>
    <div class="item" :style="{ '--rx': rx, '--ry': ry }">
      <router-link to="/map">百度地图</router-link>
      <div class="des">
        百度地图
      </div>
    </div>
    <div class="item" :style="{ '--rx': rx, '--ry': ry }">
      <router-link to="/speechRecognition">语音识别</router-link>
      <div class="des">
        使用Web Speech Api实现语音识别文本
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import { useMouse } from "@vueuse/core";
const size = reactive({ width: 0, height: 0 }); // 鼠标交互区域大小
// 获取元素ref
const containerRef = ref(); 
// 鼠标位置
const { x, y } = useMouse();
// rotate 参数
const rx = ref("");
const ry = ref("");

onMounted(() => {
  const { width, height } = containerRef.value.getBoundingClientRect();
  size.width = width;
  size.height = height;
});

// 鼠标移动事件
function getMouseLocal() {
  const degR = 16; //摆动幅度
  ry.value = (x.value / (size.width / (degR * 2)) - degR).toFixed(1) + "deg";
  rx.value = (degR - y.value / (size.height / (degR * 2))).toFixed(1) + "deg";
}
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  .item {
    position: relative;
    border: 1px solid #e4e4e4 ;
    width: 200px;
    height: 150px;
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    transform-style: preserve-3d;
    transform: rotateX(var(--rx)) rotateY(var(--ry));
    transition: all 0.1s;
    overflow: hidden;
      user-select: none;

    // transform: translateZ(40px);
    .des{
      position: absolute;
      color: #fff;
      font-size: 14px;
      padding:5px;
      bottom:-60px;
      left: 0;
      width: 100%;
      height:60px;
      background: linear-gradient(transparent, #333);
    }
    &:hover .des{
      transition: all .5s;
      transform: translateY(-60px);
    }
  }
  .one {
    background-size: 100% 100%;
    background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbaike.huishangbao.com%2Fuploads%2F201807%2F1532311250fG24TlkE.jpg&refer=http%3A%2F%2Fbaike.huishangbao.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654270377&t=bd69007a048fdc9ef6de0c68f3a93088");
  }
  .two {
    // background-size: 50% 50%;
    // background-repeat: no-repeat;
    // background-image: url('https://pinia.vuejs.org/logo.svg');
    background: url("https://pinia.vuejs.org/logo.svg") no-repeat center/30%;
  }
}
</style>
