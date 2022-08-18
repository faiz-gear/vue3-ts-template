/*
 * @Author       : 卢瑶
 * @Date         : 2022-07-29 15:47:43
 * @LastEditTime : 2022-07-29 15:47:44
 * @LastEditors  : 卢瑶
 * @Description  :
 * @FilePath     : /monitor_web_reconstruction/src/service/type.ts
 */
export interface IResponse<T = any> {
  code: number
  message: string
  data: T
}
