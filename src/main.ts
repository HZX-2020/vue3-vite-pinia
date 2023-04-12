import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import{ createPinia} from 'pinia'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {alert} from './components/Alert/index.js'

// import BaiduMapVue3 from 'baidu-map-vue3'
const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$alert = alert
app.use(router).use(pinia).use(Antd).mount('#app')
// .use(BaiduMapVue3, {
//   apiKey: 'XyTZ1iuf806HsEBuKmuNW3GOKU0GP0Te'
// })
