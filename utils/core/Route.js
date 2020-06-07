/**
 * @name: uni-app 路由封装
 * @author: SunSeekerX
 * @todo 增加跳转拦截器
 * @Date: 2020-06-06 21:25:31
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 22:07:00
 */

/**
 * @name uni-app 路由封装
 * @param { Object } options
 * @returns void
 */
export function router(options = {}) {
  const config = {
    // 页面路径
    url: '',
    // 跳转类型
    type: 'navigateTo',
    // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
    delta: 1,
    // 窗口显示的动画效果
    animationType: 'pop-in',
    // 窗口动画持续时间，单位为 ms
    animationDuration: 300,
    // 接口调用成功的回调函数
    // success() {},
    // 接口调用失败的回调函数
    fail(e) {
      console.log(e)
    },
    // 接口调用结束的回调函数（调用成功、失败都会执行）
    // complete() {},
  }

  // 合并参数
  Object.assign(config, options)

  // 判断跳转类型
  switch (config.type) {
    case 'navigateTo':
      // 保留当前页面，跳转到应用内的某个页面
      uni.navigateTo({
        url: config.url,
        animationType: config.animationType,
        animationDuration: config.animationDuration,
        fail: config.fail,
      })
      break

    case 'redirectTo':
      // 关闭当前页面，跳转到应用内的某个页面
      uni.redirectTo({
        url: config.url,
        fail: config.fail,
      })
      break

    case 'reLaunch':
      // 关闭所有页面，打开到应用内的某个页面
      uni.reLaunch({
        url: config.url,
        fail: config.fail,
      })
      break

    case 'switchTab':
      // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      uni.switchTab({
        url: config.url,
        fail: config.fail,
      })
      break

    case 'navigateBack':
      // 关闭当前页面，返回上一页面或多级页面
      uni.navigateBack({
        delta: config.delta,
        animationType: config.animationType,
        animationDuration: config.animationDuration,
        fail: config.fail,
      })
      break

    default:
      break
  }
}
