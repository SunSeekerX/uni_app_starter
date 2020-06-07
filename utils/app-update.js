/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-19 09:19:37
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-19 16:23:46
 */

import {
	Update
} from '@/apis/index'
import {
	handleApiRequestException
} from '@/utils/handle-error'
import {
	toast
} from '@/utils/index'

// Update.update({
// 	version: '1.0.0',
// 	name: 'ybt'
// })

plus.runtime.getProperty(plus.runtime.appid, async widgetInfo => {
	try {
		const res = await Update.update({
			version: widgetInfo.version,
			name: widgetInfo.name,
		})
		if (res.success) {
			if (res.data.update) {
				// 需要热更新
				const {
					wgtUrl
				} = res.data
				toast('需要热更新')
				uni.downloadFile({
					url: wgtUrl,
					success: (downloadResult) => {
						console.log(downloadResult);
						if (downloadResult.statusCode === 200) {
							plus.runtime.install(downloadResult.tempFilePath, {
								force: false
							}, function() {
								console.log('install success...');
								plus.runtime.restart();
							}, function(e) {
								console.log(e);
								console.error('install fail...');
							});
						}
					}
				});
			} else {
				toast('不需要热更新')
			}
		} else {
			toast('资源更新检查失败')
		}
		console.log(res)
	} catch (error) {
		handleApiRequestException(error)
	}
})
