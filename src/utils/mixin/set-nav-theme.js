/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2021-01-11 16:55:09
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-01-12 10:46:16
 */

import { mapGetters } from 'vuex'

import { THEMES } from '@/constant'

export function setNavTheme(THEME, colorNavigationBg) {
  let frontColor = '#000000'
  switch (THEME) {
    case THEMES.DARK:
      frontColor = '#ffffff'
      break
    default:
      break
  }
  uni.setNavigationBarColor({
    frontColor,
    backgroundColor: colorNavigationBg,
  })
}

export default {
  computed: {
    ...mapGetters(['THEME', 'themeVal']),
  },
  onReady() {
    setNavTheme(this.THEME, this.themeVal('colorNavigationBg'))
  },
}
