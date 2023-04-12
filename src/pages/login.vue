<template>
  <div class="login-box">
      <p class="title">Welcome  <span v-if="loginStatus">{{ user.username }}<a-button type="text" @click="logout">退出登录</a-button></span>
        
      </p>  

    <a-form
      v-if="!loginStatus"
      :model="loginForm"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      class="formItem"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        
        label="账号"
        name="username"
        :rules="[{ required: true, message: '请输入账号!' }]"
      >
        <a-input v-model:value="loginForm.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码!' }]"
      >
        <a-input-password v-model:value="loginForm.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
        <a-button type="primary" html-type="submit" style="width: 100%"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { useUser } from "../composable/useUser";
const { loginForm, login, user, loginStatus, logout } = useUser();

const onFinish = async (values: any) => {
  login()
};
const onFinishFailed = (errorInfo: any) => {
  
};
</script>
<style lang="less" scoped>
.login-box {
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-08-04%2F5f292909b0e29.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654268553&t=8007e9d77ac16c59478751ebb0cc9ce6");
  .title{
    width: 400px;
    text-align: center;

      font-weight: bold;
      font-size: 20px;
    }
  .formItem {
    width: 500px;
    padding: 20px;
    backdrop-filter: blur(5px);
    :deep(.ant-form-item-label > label) {
      color: #fff;
    }
    
  }
}
</style>
