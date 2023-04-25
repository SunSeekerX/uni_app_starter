import dark from '@/common/js/theme/dark'
import light from '@/common/js/theme/light'
import { THEMES, STORAGE_APP_THEME, STORAGE_APP_THEME_MODEL } from '@/constant'
import { getUIStyle } from '@/uni_modules/limm-utools'
import { themeModel as defaultThemeModel } from '@/config/default'

let appTheme = uni.getStorageSync(STORAGE_APP_THEME)
let appThemeModel = uni.getStorageSync(STORAGE_APP_THEME_MODEL)

function getH5Theme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEMES.DARK
  } else {
    return THEMES.LIGHT
  }
}

function getAppTheme() {
  const systemTheme = getUIStyle()
  switch (systemTheme) {
    case 'dark':
      return THEMES.DARK
    case 'light':
      return THEMES.LIGHT
    default:
      return THEMES.LIGHT
  }
}

let appThemeVars = null
if (!appTheme) {
  if (defaultThemeModel === THEMES.AUTO) {
    // #ifdef APP-PLUS
    appTheme = getAppTheme()
    // #endif
    // #ifdef H5
    appTheme = getH5Theme()
    // #endif
  } else {
    appTheme = defaultThemeModel
  }
  appThemeModel = defaultThemeModel
}

switch (appTheme) {
  case THEMES.LIGHT:
    appThemeVars = light
    break
  default:
    appThemeVars = dark
    break
}

export default {
  state: {
    theme: appTheme,
    themeModel: appThemeModel,
    vars: appThemeVars,
    themes: {
      [THEMES.DARK]: dark,
      [THEMES.LIGHT]: light,
    },
    platform: uni.getSystemInfoSync().platform,
  },
  mutations: {
    /**
     * @name 更新主题
     */
    UPDATE_THEME(state, themeModel) {
      if (Object.values(THEMES).includes(themeModel)) {
        let theme
        switch (themeModel) {
          case THEMES.DARK:
            theme = THEMES.DARK
            break
          case THEMES.LIGHT:
            theme = THEMES.LIGHT
            break
          case THEMES.AUTO:
            // #ifdef APP-PLUS
            theme = getAppTheme()
            // #endif

            // #ifdef H5
            theme = getH5Theme()
            // #endif
            break
          default:
            break
        }
        state.theme = theme
        state.themeModel = themeModel
        state.vars = state.themes[theme]
        uni.setStorageSync(STORAGE_APP_THEME, theme)
        uni.setStorageSync(STORAGE_APP_THEME_MODEL, themeModel)
      } else {
        console.error(`Theme: Theme model for ${themeModel} not found!`)
      }
    },

    /**
     * @name 初始化主题
     */
    INIT_THEME(state) {
      // #ifdef APP-PLUS
      plus.nativeUI.setUIStyle(state.themeModel)
      // if (state.platform === 'ios') {
      //   uni.setBackgroundTextStyle({
      //     // 下拉背景字体、loading 图的样式，值为：dark、light
      //     textStyle: state.theme,
      //   })
      //   uni.setBackgroundColor({
      //     backgroundColor: state.vars['colorPageBg'],
      //     backgroundColorTop: state.vars['colorPageBg'],
      //     backgroundColorBottom: state.vars['colorPageBg'],
      //   })
      // }
      // #endif
    },
  },
  getters: {
    /**
     * @name 获取主题字符串
     */
    THEME: (state) => {
      return state.theme
    },
    /**
     * @name 通过 key 获取主题
     * @param {String} key
     */
    themeVal: (state) => (key) => {
      const val = state.vars[key]
      if (val) {
        return val
      } else {
        console.error(`Theme: Can not get value for ${key}!`)
        return ''
      }
    },
    /**
     * @name 主题模式
     */
    THEME_MODEL(state) {
      return state.themeModel
    },
  },
}
