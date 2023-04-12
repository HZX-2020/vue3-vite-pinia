import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/login",
    name: 'login',
    component: () => import("@/pages/login.vue"),
  },
  {
    path: "/teleport",
    component: () => import("@/pages/teleportView.vue"),
  },
  {
    path: "/pinia",
    component: () => import("@/pages/pinia.vue"),
  },
  {
    path: "/shop",
    component: () => import("@/pages/shop.vue"),
  },
  {
    path: "/shoppingCart",
    component: () => import("@/pages/shoppingCart.vue"),
  },
  {
    path: "/editor",
    component: () => import("@/pages/editor.vue"),
  },
  {
    path: "/map",
    component: () => import("@/pages/map.vue"),
  },
  {
    path: "/three",
    component: () => import("@/pages/three.vue"),
  },
  {
    path: "/speechRecognition",
    component: () => import("@/pages/speechRecognition/index.vue"),
  },
  {
    path: "/ws",
    component: () => import("@/pages/ws/index.vue"),
  },
  {
    path: "/css",
    component: () => import("@/pages/cssModules/index.vue"),
    children:[
      {
        path: "abc",
        component: () => import("@/pages/cssModules/components/seesaw.vue"),
      },
    ]
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
