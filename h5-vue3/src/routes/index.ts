import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const home = () => import('../pages/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    component: home
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})