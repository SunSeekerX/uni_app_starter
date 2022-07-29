## 📌 更新日志（Changelog）

## 0.6.0 2022-07-29

**Breaking Changes**

- 初始化参数 `updateUrl` 采用全路径形式，不兼容以前的版本，对应后台和管理面板都为 0.6.x

## 0.5.2 2022-06-21

**功能（Features）**

1. 上传到 uni-app 插件市场，修改文档

## 0.5.0 2021-12-28

**功能（Features）**

1. 不在需要配置 `vue.config.js`

## 0.4.0 2021-11-13

**功能（Features）**

1. 新增 `isPopupShow`，和 `closePopup` 方法

**Bug 修复 （Bug Fixes）**

1. 【重要】修复重复调用 `getUpdate` 方法更新弹框重复叠加的问题

## 0.3.0 2021-08-10

**功能（Features）**

1. 【重要】初始化参数 `log` 变更为 `isDebug`
2. 【重要】移除 `update` 配置
3. 移除 `onInitFail` 事件

**Bug 修复 （Bug Fixes）**

1. 【重要】修复偶尔获取不到 uuid 无法成功初始化的 bug
2. 修复强制更新出现两个取消下载的问题

## 0.2.0 2021-05-05

**功能（Features）**

- 【重要】增加 `updateConfig` 更新配置方法。
- 【重要】添加 `locale` 国际化配置，实现国际化。

## 0.0.4 - 2021-02-19

**功能（Features）**

- 【重要】基于发布订阅的自定义更新界面上线。
- 增加 `forceUpdate` 、`custom`、`logString`等更多配置。
- 统一 debug 样式。
- 优化代码逻辑。

**Bug 修复 （Bug Fixes）**

- 修复后台下载更新完成还能继续更新的 bug
- 修复后台下载更新完成不提示的 bug
