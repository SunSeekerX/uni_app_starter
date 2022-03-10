/**
 * 性能
 * @author: SunSeekerX
 * @Date: 2021-09-17 13:18:37
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 13:22:33
 */

/**
 * 获取当前执行时间
 * @returns { number } 毫秒值
 */
export function getNow(): number {
  let now = null
  // #ifdef H5
  now = performance.now()
  // #endif

  // #ifndef H5
  now = Date.now()
  // #endif
  return now
}
