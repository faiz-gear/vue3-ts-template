/*
 * @Author       : 卢瑶
 * @Date         : 2022-08-08 15:46:31
 * @LastEditTime : 2022-08-08 16:14:08
 * @LastEditors  : 卢瑶
 * @Description  : 全局注册机
 * @FilePath     : /monitor_web_3/src/store/index.ts
 */

import { resetLoginStore, useLoginStore } from './login/login'
import { resetMainStore, useMainStore, registerMainRoutes } from './main/main'

export interface IAppStore {
  loginStore: ReturnType<typeof useLoginStore>
  mainStore: ReturnType<typeof useMainStore>
}

const appStore: IAppStore = {} as IAppStore

// 注册store
export function registerStore() {
  appStore.loginStore = useLoginStore()
  appStore.mainStore = useMainStore()
  registerMainRoutes()
}

// 重置store
export function resetStore() {
  resetLoginStore()
  resetMainStore()
}

export default appStore
