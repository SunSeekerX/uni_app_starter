### 1、使用

```html
<scroll-view scroll-x="true">
  <y-json-view :json="json" />
</scroll-view>
```

### 2、修改样式

- 直接修改组件

```sass
<style lang="scss">
$tab:40upx;//缩进
$font-size:16px;
$colon-size:7px;//冒号两边的间隔
//折叠箭头样式
$arrow-size:7px;
$arrow-color:#333;
//颜色
$key-color:#c35e00;
$index-color:#0000ff;
$vaule-color:#42c800;
...
</style>
```
