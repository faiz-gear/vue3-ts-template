/*
 * @Author       : 卢瑶
 * @Date         : 2022-07-21 16:43:23
 * @LastEditTime : 2022-07-21 16:43:24
 * @LastEditors  : 卢瑶
 * @Description  :
 * @FilePath     : /monitor_web_reconstruction/src/service/main/main-type.ts
 */
type filterType = {
  column: string // 列
  operator: string // 操作符 like >= <=
  value: any // 值
}
export interface IOtherQueryInfo {
  sort?: 'desc' | 'asc' // 升序或降序
  order_by?: string // 排序的字段
  filter?: filterType[] // 筛选条件的数组 [{"column": "name","operator": "like","value": "华"}]
}
export interface IPageQuery extends IOtherQueryInfo {
  page: number // 页码
  page_size: number // 一页的数据量
}

export interface IPageQueryResponse<T> {
  items: T[]
  limit: number
  total: number
}
