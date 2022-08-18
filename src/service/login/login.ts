import lyRequest from '@/service'
import { ILoginInfo, ILoginResponse } from './login-types'

enum loginApi {
  LOGIN_API = '/admin/login',
  LOGOUT_API = '/admin/logout',
  REFRESH_TOKEN_API = '/admin/expire'
}

// 登录
export function login(data: ILoginInfo) {
  return lyRequest.post<ILoginResponse>({
    url: loginApi.LOGIN_API,
    data
  })
}

// 退出登录
export function logout() {
  return lyRequest.get({
    url: loginApi.LOGOUT_API
  })
}

// 刷新token
export function refreshToken() {
  return lyRequest.get({
    url: loginApi.REFRESH_TOKEN_API
  })
}
