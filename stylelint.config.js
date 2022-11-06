/**
 * CSS 样式格式化
 * @author: SunSeekerX
 * @Date: 2022-03-23 17:49:16
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-05-26 18:08:09
 */

module.exports = {
  // v13
  root: true,
  plugins: ['stylelint-order'],
  // v13
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    // 'stylelint-config-standard-scss',
    // 'stylelint-config-prettier-scss',
  ],
  // v14
  // extends: [
  //   'stylelint-config-standard-scss',
  //   'stylelint-config-recommended-vue',
  //   'stylelint-config-property-sort-order-smacss',
  //   'stylelint-config-prettier',
  // ],
  rules: {
    // 'scss/at-import-partial-extension': 'always',
    'selector-class-pattern': null,
    // uni-ap 特有的 rpx upx 单位
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx', 'upx'],
      },
    ],
    // uni-app nvue 属性
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['lines'],
      },
    ],
    // uni-app 特有的选择器
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
          'uni-slider',
        ],
      },
    ],
    // nvue 至少需要一个 style 标签
    'no-empty-source': null,
    // nvue 字体设置
    'font-family-no-missing-generic-family-keyword': null,
    // scss @ 规则
    'at-rule-no-unknown': null,
    // 这个是不然把类似 “rgba(25, 24, 30, 1)” 格式化成 "rgb(25 24 30 / 100%)" 这种形式 sass 还不支持这种语法
    'color-function-notation': null,
    // 禁用类似直接使用 unquote 不行 而要改为 string.unquote 这种的错误
    // 'scss/no-global-function-names': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 'annotation-no-unknown': [
    //   true,
    //   {
    //     ignoreAnnotations: ['default'],
    //   },
    // ],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
  },
}
