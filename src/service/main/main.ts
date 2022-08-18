import lyRequest from '..'
import { IPageQuery, IPageQueryResponse } from './main-types'

enum MainApi {
  SYSTEM_CONTENT = '/system',
  ALL_PAGE_DATA = '/all/page',
  DELETE_DATA = '/delete',
  CREATE_DATA = '/create',
  UPDATE_DATA = '/update'
}

// 根据系统id获取系统页面的初始化详情
export function getSystemContent<T = any>(systemId: number) {
  return lyRequest.get<T>({
    url: MainApi.SYSTEM_CONTENT + '/' + systemId
  })
}

// 分页获取数据
export function getAllPageData<T = any>(url: string, queryInfo: IPageQuery) {
  return lyRequest.post<IPageQueryResponse<T>>({
    url: url + MainApi.ALL_PAGE_DATA,
    data: queryInfo
  })
}

// 删除数据
export function deleteData(url: string, data: any) {
  return lyRequest.post({
    url: url + MainApi.DELETE_DATA,
    data
  })
}

// 新建数据
export function createData(url: string, data: any) {
  return lyRequest.post({
    url: url + MainApi.CREATE_DATA,
    data
  })
}
// 更新（编辑）数据
export function updateData(url: string, data: any) {
  return lyRequest.post({
    url: url + MainApi.UPDATE_DATA + '/' + data.ID,
    data
  })
}
