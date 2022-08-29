import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main/dashboard'
  },
  {
    path: '/main',
    redirect: '/main/dashboard',
    name: 'main',
    component: () => import(/* webpackChunkName: "Main" */ '@/views/main/Main.vue'),
    children: []
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "Not-Found" */ '@/views/not-found/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function resetRouter(asyncRoutes: RouteRecordRaw[]) {
  asyncRoutes.forEach((route) => {
    router.removeRoute(route.name!) // eslint-disable-line
  })
}

export default router
