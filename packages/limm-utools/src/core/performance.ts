/**
 * 性能
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
