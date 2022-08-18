/*
 * @Author       : 卢瑶
 * @Date         : 2022-07-18 10:44:09
 * @LastEditTime : 2022-08-08 15:43:16
 * @LastEditors  : 卢瑶
 * @Description  : 登录请求类型
 * @FilePath     : /monitor_web_3/src/service/login/login-types.ts
 */
import { IMenu } from '@/store/login/login-types'
import { IResponse } from '../types'

export interface ILoginInfo {
  username: string
  password: string
}

interface ILoginResponseData {
  access_token: string
  name: string
  menu_slice: IMenu[]
}

export type ILoginResponse = ILoginResponseData & IResponse
