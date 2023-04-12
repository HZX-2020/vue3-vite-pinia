<template>
  <div class="box">
    <div class="left"></div>
    <div class="right">
      <span @click="clickAlert">alert</span>
      <span @click="changeMode">切换模式</span>
      <span @click="toShoppingCart"
        >购物车（{{ num }}）<i class="iconfont icon-a-gouwuchegouwu"></i
      ></span>
      <span @click="open">取色器 <i class="iconfont icon-xiguan"></i></span>
      <span v-if="sRGBHex" :style="{ color: sRGBHex }"
        >色值：{{ sRGBHex }}</span
      >
      <span v-if="!loginStatus" @click="goLogin">未登录</span>
      <span v-else
        >{{ user.username
        }}<a-button type="link" @click="logout">退出登录</a-button></span
      >
      <span v-if="route.path != '/'" @click="goHome">返回首页</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useEyeDropper } from "@vueuse/core";
import { useUser } from "../composable/useUser";
import { useCart } from "../composable/useCart";
// 使用全局方法$alert
const { proxy }: any = getCurrentInstance(); //关键代码
const $alert = proxy.$alert;
// 取色器
const { isSupported, open, sRGBHex } = useEyeDropper();
const router = useRouter();
const route = useRoute();
const { loginStatus, user, logout } = useUser();
const { num } = useCart();
// 返回首页
function goHome() {
  router.push("/");
}
const goLogin = () => {
  router.push("/login");
};
const toShoppingCart = () => {
  router.push("/shoppingCart");
};
const body = document.getElementsByTagName("body")[0];
// 切换灰版模式
const changeMode = () => {
  if (body.getAttribute("style")?.includes("filter: grayscale(1)")) {
    body.style.filter = "grayscale(0)";
  } else {
    body.style.filter = "grayscale(1)";
  }
};

onMounted(() => {
  
});
  const clickAlert = $alert;

</script>

<style scoped lang="less">
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    span {
      cursor: pointer;
      margin-left: 20px;
    }
  }
}
</style>
