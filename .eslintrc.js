module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // uni-app 内可以直接访问的全局变量
  globals: {
    uni: 'readonly',
    plus: 'readonly',
    wx: 'readonly',
    getApp: 'readonly',
    weex: 'readonly',
    getCurrentPages: 'readonly',
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    babelOptions: {
      rootMode: 'upward',
    },
  },
  plugins: ['vue'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'prettier/prettier': 0,
    // nvue
    'vue/comment-directive': 0,
    'vue/no-v-text-v-html-on-component': 1,
    // 空内容标签需要自闭合
    // 'vue/html-self-closing': 1,
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
}
