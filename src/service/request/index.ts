import axios, { AxiosInstance } from 'axios'
import type { LyRequestConfig, LyInterceptors } from './type'

// 功能点一： request、get、post请求等，通过.then拿到结果
// 功能点二： 全局拦截器、实例拦截器、请求拦截器
// 功能点三： 加载loading效果
class LyRequest {
  instance: AxiosInstance
  interceptors?: LyInterceptors // 创建实例时可以传入自己的拦截器
  constructor(config: LyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 每个lyRequest实例单独的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所以lyRequest实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例的拦截器, 请求成功拦截')
        return config
      },
      (err) => {
        // console.log('所有实例的拦截器, 请求失败拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例的拦截器, 响应成功拦截')
        const data = res.data
        // if (data.code !== 0) {
        //   console.log('请求失败，身份错误')
        // }
        return data
      },
      (err) => {
        // console.log('所有实例的拦截器, 响应失败拦截')
        // 判断不同的HttpErrorCode进行相应的处理
        if (err.response.status === 404) {
          console.log('404的错误')
        }
        return err
      }
    )
  }
  request<T>(config: LyRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          console.log(err)
        })
    })
  }
  get<T>(config: LyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: LyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: LyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: LyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default LyRequest
