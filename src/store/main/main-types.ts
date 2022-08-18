type fnPayloadType<T = any, R = void, O = any> = (payload: T, other?: O) => R
type fnType = () => void

export interface IMainActionsPayload {
  pageName: string
  queryInfo?: any
  isAdmin?: boolean
}
export interface IMainGetters {
  getAllPageDataGetter: fnPayloadType<any, fnType>
  getAllPageDataTotalGetter: fnPayloadType<any, fnType>
}
