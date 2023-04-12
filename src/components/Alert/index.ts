import {h, render} from 'vue'
import Alert from './alert.vue'
function alert() {
  const VNode = h(Alert) // js对象
  // 2.准备挂载节点
  const container = document.createElement('div')
  document.body.appendChild(container)
  // 3.渲染虚拟dom到真实dom
  render(VNode,container)
}
export {alert}