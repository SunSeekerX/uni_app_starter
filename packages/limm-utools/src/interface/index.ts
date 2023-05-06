export enum ResCode {
  Success = 200,
  UserAction = 400,
  SystemErr = 500,
}
export interface BaseResult<T> {
  // 调用是否成功
  success: Boolean
  // 状态码
  code: Number
  // 消息提示
  msg: String
  // 返回数据
  data?: T
  // 错误
  error?: any
}
