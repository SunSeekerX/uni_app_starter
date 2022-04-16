/**
 * ['H5', 'App', 'App nvue', '微信小程序'] 微信小程序注入 globalData
 */
const globalData = getApp().globalData

export default {
  data() {
    return {
      globalData,
    }
  },
}
