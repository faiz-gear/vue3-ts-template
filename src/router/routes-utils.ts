/*
 * @Author       : 卢瑶
 * @Date         : 2022-07-18 10:35:35
 * @LastEditTime : 2022-07-18 18:22:01
 * @LastEditors  : 卢瑶
 * @Description  : 动态获取所有后台路由对象
 * @FilePath     : /monitor_web_reconstrution/src/router/routes-helper.ts
 */
import { RouteRecordRaw } from 'vue-router'
import router from '.'

export function requireAllRoutes(): RouteRecordRaw[] {
  const allRoutes: RouteRecordRaw[] = []

  // 获取所有路由映射对象
  const allRoutesPath = require.context('./main', true, /\.ts$/)
  allRoutesPath.keys().forEach((path: any) => {
    const route = require('./main' + path.split('.')[1]).default
    allRoutes.push(route)
  })

  return allRoutes
}

export function registerRoutes(permissionRoutes: RouteRecordRaw[]) {
  permissionRoutes.forEach((route) => {
    router.addRoute('main', route)
  })
}
