/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-11 16:55:09
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-29 17:33:44
 */

import { mapGetters } from 'vuex'

import { setNavTheme } from './set-nav-theme'

export function setTabbarTheme(backgroundColor) {
  uni.setTabBarStyle({
    backgroundColor,
  })
}

export default {
  computed: {
    ...mapGetters(['THEME', 'themeVal']),
  },
  onShow() {
    setNavTheme(this.THEME, this.themeVal('colorNavigationBg'))
    setTabbarTheme(this.themeVal('colorContentBg'))
  },
}
