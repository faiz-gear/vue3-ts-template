import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ILyInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface ILyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: ILyInterceptors<T>
}
