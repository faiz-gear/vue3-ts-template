import LyRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const lyRequest = new LyRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor(config) {
      return config
    },
    requestInterceptorCatch(err) {
      return err
    },
    responseInterceptor(res) {
      return res
    },
    responseInterceptorCatch(err) {
      return err
    }
  }
})

export default lyRequest
