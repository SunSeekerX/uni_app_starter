/**
 * uni-app api 二次封装
 * @author: SunSeekerX
 * @Date: 2021-06-03 00:14:50
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 19:57:30
 */
/// <reference types="@dcloudio/types" />
import type { UniRouteOptions, UniCopyOptions, UniOpenUrlOptions } from './interface'
/**
 * 获取主题模式
 * @returns { string } - 返回当前系统使用的外观样式
 */
export declare function getUIStyle(): string
/**
 * uni-app toast 提示
 * @param { string } msg 需要显示的消息
 * @param { Object } options 参数配置,同uni-app官网
 * @returns { null }
 */
export declare function toast(msg: string, options?: UniApp.ShowToastOptions): void
/**
 * uni-app 路由封装
 * @param { Object } options - 参数配置
 * @param { string } options.url - uni-app 页面地址
 * @param { string } [options.type='navigateTo'] - 跳转类型
 * @param { string } [options.delta=1] - 返回的页面数，如果 delta 大于现有页面数，则返回到首页
 * @param { string } [options.animationType='pop-in'] - 窗口显示的动画效果
 * @param { string } [options.animationDuration=300] - 窗口动画持续时间，单位为 ms
 * @param { function } [options.fail=cb] - 失败回调
 * @param { function } [options.complete=cb] - 完成回调
 * @returns { null }
 */
export declare function route(options: UniRouteOptions): void
/**
 * uni-app 复制文字方法
 * @deprecated since version 0.0.12
 * @param { string } value - 需要复制的内容
 * @param { Object } [options] - 参数配置
 * @param { string } [options.msg=''] - 复制完成提示文字
 * @returns { void }
 */
export declare function copy(value: string | number, options: UniCopyOptions): void
/**
 * 设置系统剪贴板的内容, 默认不显示 toast
 */
export declare function setClipboardData(options?: UniApp.SetClipboardDataOptions): Promise<void>
/**
 * uni-app 打开链接
 * @param { string } url - 要跳转的地址
 * @param { Object } [options] - 参数配置
 * @param { boolean } [options.h5Inside=false] - H5 是否在当前窗口打开链接
 * @param { boolean } [options.appInside=true] - App 是否使用内部的浏览器打开链接
 */
export declare function openUrl(url: string, options?: UniOpenUrlOptions): void
