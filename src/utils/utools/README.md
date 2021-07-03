# utools

适合 uni-app 开发者的工具包。

## 依赖库

1. `dayjs`

## 📌 FAQ

Q：为啥没用 `typescript` ?

A：最初用的 `typescript` 但是包含了需要用到 `条件编译` 的代码，经过 `rollup` 打包之后会丢失，因为 `条件编译` 是 `HbuilderX` 的打包特性。所以只能写成 es6 模块的形式。
