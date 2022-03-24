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
  },
}
