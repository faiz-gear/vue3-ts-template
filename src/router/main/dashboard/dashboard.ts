const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/views/main/dashboard/Dashboard.vue')
export default {
  path: '/main/dashboard',
  name: 'dashboard',
  component: Dashboard,
  meta: {
    title: '主界面',
    index: 1
  },
  children: []
}
