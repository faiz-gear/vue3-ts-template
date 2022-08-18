/*
 * @Author       : 卢瑶
 * @Date         : 2022-03-17 17:04:29
 * @LastEditTime : 2022-08-08 15:59:51
 * @LastEditors  : 卢瑶
 * @Description  : 项目请求实例
 * @FilePath     : /monitor_web_3/src/service/index.ts
 */

import { useGlobSetting } from '@/hooks/setting'
import LyRequest from './request'
import { ElMessage } from 'element-plus'
import router from '@/router'
import appStore, { resetStore } from '@/store'

const { VUE_APP_API_URL, VUE_APP_BASE_URL } = useGlobSetting()
const TIMEOUT = 20000
const whiteList = ['/login']
const RESPONSE_ERROR_MESSAGE_MAP: Record<string, string> = {
  'Network Error': '网络连接错误,请联系管理员处理!'
}

const lyRequest = new LyRequest({
  baseURL: VUE_APP_BASE_URL + VUE_APP_API_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor(config) {
      // 确保mainStore已经install
      const token = appStore.loginStore.token

      if (token && !whiteList.includes(config.url as string)) {
        config.headers!.Authorization = `Bearer ${token}` // eslint-disable-line
      }
      return config
    },
    requestInterceptorCatch(err) {
      ElMessage.error({
        message: err.message
      })
      return err
    },
    responseInterceptor(res) {
      if (res.data.code !== 2000) {
        ElMessage.error({
          message: res.data.message
        })
        if (res.data.code === 4001) {
          router.push('/login')
          resetStore()
          return
        }
        return Promise.reject(new Error(res.data.message))
      }
      return res.data.data
    },
    responseInterceptorCatch(err) {
      const message = RESPONSE_ERROR_MESSAGE_MAP[err.message]
      ElMessage.error({
        message: message
      })
      return err
    }
  }
})

export default lyRequest
