export interface BaseResult<T> {
  // 状态码
  code: Number

  // 调用是否成功
  success: Boolean

  // 消息提示
  msg: String

  // 返回数据
  data?: T
}
