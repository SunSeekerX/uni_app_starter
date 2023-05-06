export default {
  namespaced: true,
  state: {
    // 系统信息
    appSystemInfo: uni.getSystemInfoSync(),
    // 窗口高度，部分小程序无法使用
    // #ifdef APP || MP-WEIXIN || H5
    appWindowInfo: uni.getWindowInfo(),
    // #endif
  },
  mutations: {
    // 更新系统信息
    onUpdateAppSystemInfoMutation(state) {
      state.appSystemInfo = uni.getSystemInfoSync()
    },
    // 更新窗口信息
    onUpdateAppWindowInfoMutation(state) {
      state.appWindowInfo = uni.getWindowInfo()
    },
  },
  getters: {
    // 状态栏高度
    statusBarHeightGetter(state) {
      return state.appSystemInfo?.statusBarHeight || 0
    },
    // 导航栏高度
    navBarHeightGetter(state) {
      const statusBarHeight = state?.appSystemInfo?.statusBarHeight || 0
      let navBarHeight = 44
      // #ifdef MP
      const custom = uni.getMenuButtonBoundingClientRect()
      navBarHeight = custom.height + (custom.top - statusBarHeight) * 2
      // #endif
      return navBarHeight
    },
    // 页面高度，排除状态栏、底部安全区域
    pageHeightGetter: (state) =>
      state.appSystemInfo.screenHeight -
      state.appSystemInfo.statusBarHeight -
      state.appSystemInfo.safeAreaInsets.bottom,
    // 是否为 ios 设备
    isIosGetter(state) {
      return state.appSystemInfo?.osName === 'ios'
    },
  },
}
