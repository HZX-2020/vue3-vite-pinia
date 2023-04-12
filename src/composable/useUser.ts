import { message } from "ant-design-vue";
import { useStorage, StorageSerializers } from "@vueuse/core";
import { reactive, computed } from "vue";
import LoginForm from "../types/login";
// const user = reactive({
//   id: "",
//   username: "",
// });
// 存储在本地local Storage
const user = useStorage("user", null, undefined, {
  serializer: StorageSerializers.object,
});
export const useUser = () => {
  const loginForm = reactive<LoginForm>({
    username: "",
    password: "",
  });

  // 登录
  const login = async () => {
    // user.id = "1";
    // user.username = loginForm.username;
    user.value = { id: 1, username: loginForm.username };
    message.success("登录成功");
  };
  // 登录状态
  const loginStatus = computed(() => {
    return user.value?.id;
  });
  // 退出登录
  const logout = async () => {
    // user.id = "";
    // user.username = "";
    user.value = null;
    message.success("退出成功");
  };
  return {
    loginForm,
    login,
    user,
    loginStatus,
    logout,
  };
};
