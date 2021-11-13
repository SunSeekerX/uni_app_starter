---
title: UniAppUtil
---

## getUIStyle

```typescript
/**
 * 获取主题模式
 * @returns { string } - 返回当前系统使用的外观样式
 */
export declare function getUIStyle(): string
```

## toast

```typescript
/**
 * uni-app toast 提示
 * @param { string } msg 需要显示的消息
 * @param { Object } options 参数配置,同uni-app官网
 * @returns { null }
 */
export declare function toast(msg: string, options?: UniApp.ShowToastOptions): void
```

## route

```typescript
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
```

## copy

```typescript
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
 * uni-app 复制文字方法
 * @param { string } value - 需要复制的内容
 * @param { Object } [options] - 参数配置
 * @param { string } [options.msg=''] - 复制完成提示文字
 * @returns { void }
 */
export declare function copy(value: string | number, options: UniCopyOptions): void
```

## openUrl

```typescript
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
/**
 * uni-app 打开链接
 * @param { string } url - 要跳转的地址
 * @param { Object } [options] - 参数配置
 * @param { boolean } [options.h5Inside=false] - H5 是否在当前窗口打开链接
 * @param { boolean } [options.appInside=true] - App 是否使用内部的浏览器打开链接
 */
export declare function openUrl(url: string, options?: UniOpenUrlOptions): void
```
