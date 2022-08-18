// 全局设置
export interface globEnv {
  VUE_APP_APP_NAME: string
  VUE_APP_API_URL: string
  VUE_APP_BASE_URL: string
  VUE_APP_UPLOAD_URL: string
  VUE_APP_LINE_NAME: string
}

export function useGlobSetting(): globEnv {
  const ENV = process.env

  const { VUE_APP_APP_NAME, VUE_APP_API_URL, VUE_APP_BASE_URL, VUE_APP_UPLOAD_URL, VUE_APP_LINE_NAME } =
    ENV as unknown as globEnv

  return {
    VUE_APP_APP_NAME,
    VUE_APP_API_URL,
    VUE_APP_BASE_URL,
    VUE_APP_UPLOAD_URL,
    VUE_APP_LINE_NAME
  }
}
