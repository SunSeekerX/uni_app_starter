export default {
  onTabItemTap() {
    // #ifdef APP-PLUS
    if (uni.getSystemInfoSync().platform == 'ios') {
      const UIImpactFeedbackGenerator = plus.ios.importClass(
        'UIImpactFeedbackGenerator'
      )
      const impact = new UIImpactFeedbackGenerator()
      impact.prepare()
      impact.init(1)
      impact.impactOccurred()
    }
    if (uni.getSystemInfoSync().platform == 'android') {
      uni.vibrateShort()
    }
    // #endif
  },
}
