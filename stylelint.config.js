/**
 * CSS 样式格式化
 * @author: SunSeekerX
 * @Date: 2022-03-23 17:49:16
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-26 18:08:09
 */

module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-prettier',
  ],
  rules: {
    'scss/at-import-partial-extension': 'always',
    'selector-class-pattern': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx', 'upx'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['lines'],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          'page',
          'picker-view',
          'uni-scroll-view',
          'uni-button',
          'scroll-view',
          'uni-picker',
          'uni-image',
          'uni-textarea',
          'uni-page-body',
          'uni-input',
        ],
      },
    ],
    // nvue 至少需要一个 style 标签
    'no-empty-source': null,
    // nvue 字体设置
    'font-family-no-missing-generic-family-keyword': null,
    // 禁用类似直接使用 unquote 不行 而要改为 string.unquote 这种的错误
    'scss/no-global-function-names': null,
  },
}
