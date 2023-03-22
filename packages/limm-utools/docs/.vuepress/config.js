module.exports = {
  title: 'utools',
  theme: 'antdocs',
  description: '适合 uni-app 开发者的工具包。',
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://utools.yoouu.cn/',
      },
    ],
  ],
  markdown: {
    lineNumbers: false,
    anchor: {
      permalinkBefore: false,
    },
  },
  themeConfig: {
    backToTop: true,
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: 'Api', link: '/api/guide' },
    ],
    sidebar: {
      '/api/': ['guide', 'common', 'uni-app', 'validate', 'encode', 'encrypt', 'performance', 'random'],
    },
    sidebarDepth: 3,
    lastUpdated: '上次更新',
    repo: 'https://github.com/SunSeekerX/uni-app-starter/tree/main/packages/utools',
    editLinks: false,
  },
}
