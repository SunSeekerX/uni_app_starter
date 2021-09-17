/**
 * 项目默认配置文件
 * @author: SunSeekerX
 * @Date: 2021-03-27 15:00:32
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-09-17 21:33:08
 */

import { THEMES } from './constant'

// 默认主题
export const themeModel = THEMES.LIGHT

/**
 * @name 默认环境
 */
export const defaultEnv = 'dev'

/**
 * @name 是否显示环境切换功能
 * 在正式环境下关闭环境切换
 */
export const envChange = defaultEnv !== 'online'

/**
 * @name uni.scss 变量 js 版
 */
// 页面默认左右边距
export const cSpacingRowBase = '36'
export const cSpacingRowBaseU = '36rpx'
// 导航栏高度
export const cNavigationHeight = '44'
export const cNavigationHeightU = '44px'
// 页面额外的底部距离
export const cPageOtherHeight = '100'
export const cPageOtherHeightU = '100px'
// mask 背景色
export const cMaskBg = 'rgba(0, 0, 0, .3)'
// Font size
export const textSizeXs = '12'
export const textSizeXsU = '12px'
export const textSizeSm = '14'
export const textSizeSmU = '14px'
export const textSizeMd = '16'
export const textSizeMdU = '16px'
export const textSizeLg = '18'
export const textSizeLgU = '18px'
export const textSizeXl = '20'
export const textSizeXlU = '20px'
export const textSizeXxl = '22'
export const textSizeXxlU = '22px'
