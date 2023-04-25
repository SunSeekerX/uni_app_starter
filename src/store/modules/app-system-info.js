export default {
  namespaced: true,
  state: {
    appSystemInfo: uni.getSystemInfoSync(),
    // #ifdef APP || MP-WEIXIN || H5
    appWindowInfo: uni.getWindowInfo(),
    // #endif
  },
  mutations: {
    onUpdateAppSystemInfoMutation(state) {
      state.appSystemInfo = uni.getSystemInfoSync()
    },
    // #ifdef APP || MP-WEIXIN || H5
    onUpdateAppWindowInfo(state) {
      state.appWindowInfo = uni.getWindowInfo()
    },
    // #endif
  },
  getters: {
    statusBarHeight(state) {
      return state?.appSystemInfo?.statusBarHeight || 0
    },
    navigationBarHeight(state) {
      const statusBarHeight = state?.appSystemInfo?.statusBarHeight || 0
      let navigationBarHeight = 44
      // #ifdef MP
      const custom = wx.getMenuButtonBoundingClientRect()
      navigationBarHeight = custom.height + (custom.top - statusBarHeight) * 2
      // #endif
      return navigationBarHeight
    },
    pageHeightC: (state) =>
      state.appWindowInfo.screenHeight -
      state.appWindowInfo.statusBarHeight -
      state.appWindowInfo.safeAreaInsets.bottom,
  },
}
