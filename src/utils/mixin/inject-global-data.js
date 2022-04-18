/**
 * ['H5', 'App', 'App nvue', '微信小程序'] 微信小程序注入 globalData
 */

export default {
  // #ifdef H5 || APP-PLUS
  computed: {
    globalData() {
      return getApp().globalData
    },
  },
  // #endif
  // #ifdef MP-WEIXIN
  data() {
    return {
      globalData: null,
    }
  },
  onShow() {
    this.globalData = getApp().globalData
  },
  // #endif
}
