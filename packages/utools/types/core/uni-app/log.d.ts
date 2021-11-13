/**
 * 日志工具
 * @author: SunSeekerX
 * @Date: 2021-09-17 20:21:47
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:47:21
 */
interface StyleOptions {
  color?: string
  bgColor?: string
  fontSize?: string
}
interface LogOptions {
  debug: StyleOptions
  log: StyleOptions
  warn: StyleOptions
  error: StyleOptions
}
export declare class Log {
  appName: string
  options: LogOptions
  constructor(appName?: string)
  debug(...args: unknown[]): void
  log(...args: unknown[]): void
  warn(...args: unknown[]): void
  error(...args: unknown[]): void
  setName(name: string): void
  /**
   * TODO 可以优化，这里 key 直接合并 ts 会检测到隐式为 any 类型，后期优化，先粗暴的判断一下
   * @param options
   */
  setOptions(options: LogOptions): void
}
export declare const LogUtil: Log
export {}
