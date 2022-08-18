import { defineStore, storeToRefs } from 'pinia'
import { reactive } from 'vue'
import { registerRoutes, requireAllRoutes } from '@/router/routes-utils'

import { IMainActionsPayload } from './main-types'
import { createData, updateData, deleteData, getAllPageData } from '@/service/main/main'

import { useLoginStore } from '../login/login'

export const useMainStore = defineStore('main', () => {
  // 分页数据
  const pageData = reactive<Record<string, any>>({
    users: [],
    usersTotal: 0,
    usersSize: 0,
    roles: [],
    rolesTotal: 0,
    rolesSize: 0
  })

  // 分页获取数据action
  const getAllPageDataAction = async (payload: IMainActionsPayload) => {
    const url = payload.isAdmin ? '/admin/' + payload.pageName : '/' + payload.pageName
    const res = await getAllPageData<any>(url, payload.queryInfo)
    pageData[payload.pageName] = res.items
    pageData[`${payload.pageName}Total`] = res.total
    pageData[`${payload.pageName}Size`] = payload.queryInfo.page_size
  }
  // 删除数据action
  const deletePageDataAction = async (payload: IMainActionsPayload) => {
    const url = payload.isAdmin ? '/admin/' + payload.pageName : '/' + payload.pageName
    return Promise.resolve(await deleteData(url, payload.queryInfo))
  }
  // 创建数据action
  const createPageDataAction = async (payload: IMainActionsPayload) => {
    const url = payload.isAdmin ? '/admin/' + payload.pageName : '/' + payload.pageName
    return Promise.resolve(await createData(url, payload.queryInfo))
  }
  // 更新数据action
  const updatePageDataAction = async (payload: IMainActionsPayload) => {
    const url = payload.isAdmin ? '/admin/' + payload.pageName : '/' + payload.pageName
    return Promise.resolve(await updateData(url, payload.queryInfo))
  }

  // 获取数据getter
  const getAllPageDataGetter = (pageName: string) => {
    return pageData[`${pageName}`]
  }
  // 获取数据总数getter
  const getAllPageDataTotalGetter = (pageName: string) => {
    return pageData[`${pageName}Total`]
  }

  return {
    pageData,

    getAllPageDataAction,
    deletePageDataAction,
    createPageDataAction,
    updatePageDataAction,

    // getter
    getAllPageDataGetter,
    getAllPageDataTotalGetter
  }
})

export function registerMainRoutes() {
  const loginStore = useLoginStore()
  const { permissionRoutes } = storeToRefs(loginStore)
  const { setPermissionRoutes } = loginStore
  const allRoutes = requireAllRoutes()
  setPermissionRoutes(allRoutes)
  registerRoutes(permissionRoutes.value)
}

// 重置mainStore
export function resetMainStore() {
  const mainStore = useMainStore()
  // 重置state数据
  const pageNames = ['users', 'roles']
  pageNames.forEach((pageName) => {
    mainStore.pageData[`${pageName}`] = []
    mainStore.pageData[`${pageName}Total`] = 0
    mainStore.pageData[`${pageName}Size`] = 0
  })
}
