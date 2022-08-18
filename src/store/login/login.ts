import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import type { ILoginInfo } from '@/service/login/login-types'
import router from '@/router'
import { RouteRecordRaw } from 'vue-router'
import { IMenu } from './login-types'
import useStorage from '@/hooks/storage'
import { storageVariableConfig } from '@/config'
import { login } from '@/service/login/login'
import { ElNotification } from 'element-plus'
import { registerMainRoutes } from '../main/main'
import { resetRouter } from '@/router'

const storage = useStorage()

export const useLoginStore = defineStore('login', () => {
  const username = ref(storage.getItem(storageVariableConfig.USERNAME) || '')
  const permissionRoutes = ref<RouteRecordRaw[]>([])
  const menus = ref<IMenu[]>(storage.getItem(storageVariableConfig.MENUS) ?? [])
  const token = ref<string>(storage.getItem(storageVariableConfig.TOKEN) ?? '')

  // 设置菜单
  const setMenus = (newMenus: IMenu[]) => {
    menus.value = newMenus
  }
  // 设置用户名
  const setName = (newUsername: string) => {
    username.value = newUsername
  }
  // 设置token
  const setToken = (newToken: string) => {
    token.value = newToken
  }
  // 设置权限路由
  const setPermissionRoutes = (newRoutes: RouteRecordRaw[]) => {
    permissionRoutes.value = newRoutes
  }

  // 账户密码登录
  const loginByUsernameAndPassword = async (loginInfo: ILoginInfo) => {
    const { name, access_token, menu_slice } = await login(loginInfo)

    // 1.pinia存储数据
    setName(name)
    setToken(access_token)
    setMenus(menu_slice)
    // 2.storage存储数据
    storage.setItem(storageVariableConfig.USERNAME, username)
    storage.setItem(storageVariableConfig.TOKEN, access_token)
    storage.setItem(storageVariableConfig.MENUS, menu_slice)

    registerMainRoutes()

    // 3.跳转到首页
    router.push('/main')
    // 4.登录成功通知提醒消息
    const lastLoginUsername = storage.getItem(storageVariableConfig.LAST_LOGIN_USERNAME)
    ElNotification({
      title: '登录成功!',
      message: `${lastLoginUsername === loginInfo.username ? '欢迎回来' : '欢迎您'}, ${loginInfo.username}`,
      type: 'success'
    })
    // 5.提醒完毕后存储LAST_LOGIN_USERNAME
    storage.setItem(storageVariableConfig.LAST_LOGIN_USERNAME, loginInfo.username)
  }

  return {
    username,
    permissionRoutes,
    token,
    menus,

    loginByUsernameAndPassword,
    setMenus,
    setName,
    setToken,
    setPermissionRoutes
  }
})

export function resetLoginStore() {
  const loginStore = useLoginStore()
  const { username, permissionRoutes } = storeToRefs(loginStore)
  const { setName, setToken, setMenus, setPermissionRoutes } = loginStore

  username.value = ''
  setName('')
  setToken('')
  setMenus([])
  setPermissionRoutes([])

  // 清除storage存储数据
  storage.removeItem(storageVariableConfig.USERNAME)
  storage.removeItem(storageVariableConfig.TOKEN)
  storage.removeItem(storageVariableConfig.MENUS)
  // reset router
  resetRouter(permissionRoutes.value)
}
