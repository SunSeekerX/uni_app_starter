/**
 * uni-app 接口
 * @author: SunSeekerX
 * @Date: 2021-06-03 22:27:33
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 17:25:21
 */
/// <reference types="@dcloudio/types" />
/**
 * uni-app 路由跳转函数参数
 */
export interface UniRouteOptions {
  /**
   * 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数
   */
  url: string
  type?: 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab' | 'navigateBack'
  delta?: number
  /**
   * 窗口显示的动画类型
   * - auto: 自动选择动画效果
   * - none: 无动画效果
   * - slide-in-right: 从右侧横向滑动效果
   * - slide-in-left: 左侧横向滑动效果
   * - slide-in-top: 从上侧竖向滑动效果
   * - slide-in-bottom: 从下侧竖向滑动效果
   * - fade-in: 从透明到不透明逐渐显示效果
   * - zoom-out: 从小到大逐渐放大显示效果
   * - zoom-fade-out: 从小到大逐渐放大并且从透明到不透明逐渐显示效果
   * - pop-in: 从右侧平移入栈动画效果
   */
  animationType?:
    | 'auto'
    | 'none'
    | 'slide-in-right'
    | 'slide-in-left'
    | 'slide-in-top'
    | 'slide-in-bottom'
    | 'fade-in'
    | 'zoom-out'
    | 'zoom-fade-out'
    | 'pop-in'
  /**
   * 窗口显示动画的持续时间，单位为 ms
   */
  animationDuration?: number
  /**
   * 接口调用成功的回调函数
   */
  success?: (result: any) => void
  /**
   * 接口调用失败的回调函数
   */
  fail?: (result: any) => void
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (result: any) => void
}
/**
 * uni-app 复制函数参数
 */
export interface UniCopyOptions extends UniApp.SetClipboardDataOptions {
  /**
   * 复制完成后需要提示的内容，为空不提示
   */
  msg: string
}
/**
 * uni-app 打开连接参数
 */
export interface UniOpenUrlOptions {
  /**
   * H5 是否在内部打开地址
   */
  h5Inside?: boolean
  /**
   * App 是否在内部打开地址
   */
  appInside?: boolean
}
