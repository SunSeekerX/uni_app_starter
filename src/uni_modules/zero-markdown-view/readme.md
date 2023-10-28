# zero-markdown-view


## 插件说明

个人仅测试于微信小程序


## 使用方法

**符合`easycom`组件模式, 导入 `uni_modules` 后直接使用即可 **

先下载将要使用到的依赖包


```html
<template>
	<view class="container">
		<!-- 默认用法 -->
	<zero-markdown-view :themeColor="themeColor" :markdown="content"></zero-markdown-view>
	</view>
</template>
<script>
	
	export default {
		data() {
			return {
				
			}
		},
		created() {
		},
		methods: {
		
		},
	}
</script>
	<style lang="scss" scoped>
	</style>
```

## 参数说明

|参数		|类型	|默认值		|描述			|
|--			|--		|--			|--				|
|markdown	|String	|			|markdown文本	|
|themeColor	|String	|'#007AFF'	|主题色			|
|codeBgColor|String	|'#2d2d2d'	|代码块背景色			|


## 1.0.0 -> 2.0.0 优化思路及详细过程

 1. 省去了 npm install marked
 2. 省去了 npm install highlight.js
 3. 使用mp-html自带的插件,重新生成uniapp包,大幅减少插件体积

传送门: [优化思路及详细过程](https://juejin.cn/post/7160995270476431373/) https://juejin.cn/post/7160995270476431373/

### 感谢 mp-html 插件

插件地址: [https://ext.dcloud.net.cn/plugin?id=805](https://ext.dcloud.net.cn/plugin?id=805)

文档地址: [https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart)


插件预览:
![code](https://img.zerojs.cn/mweb/we_code.jpg)


> 小程序搜索: zerojs零技术

> 预览的小程序不一定能及时更新当前插件
