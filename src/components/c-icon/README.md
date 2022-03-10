1. 进入 [iconfont](https://www.iconfont.cn/) 创建一个项目，然后选择一些图标，下载到本地。

2. 删除 `iconfont.css` 的一些代码，删除如下

   - 原来的

     ```css
     @font-face {
       font-family: 'iconfont'; /* Project id 2552854 */
       src: url('iconfont.woff2?t=1621234667085') format('woff2'), url('iconfont.woff?t=1621234667085')
           format('woff'),
         url('iconfont.ttf?t=1621234667085') format('truetype');
     }
     ```

   - 删除之后

     ```css
     @font-face {
       font-family: 'iconfont'; /* Project id 2552854 */
       src: url('iconfont.woff2?t=1621234667085') format('woff2');
     }
     ```

3. 然后将 `c-icon/iconfont.css`，和 `c-icon/iconfont.woff2` 替换下

4. 到 [https://www.giftofspeed.com/base64-encoder/](https://www.giftofspeed.com/base64-encoder/) 转码下载文件的 `iconfont.ttf`，将结果填到 `base64ttf.js`

5. 如果需要在 nvue 使用的话需要配置 `icons.js` 配置下 name 和 Unicode 码对应才能显示出来。
