/**
 * @name: 
 * @author: SunSeekerX
 * @Date: 2020-05-26 16:15:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-06-06 11:34:18
 */

/**
 * @name 校验手机号码
 * @param { String|Number } 手机号码
 * @return { Boolean }
 */
export function isMobilePhone(str) {
	return /^1[3456789]\d{9}$/.test(str)
}

/**
 * @name 
 * @param { String } str 需要校验的字符
 */
export function isBedStartCode(str){
	return /^[A-z]+$/.test(str)
}

export function isCardNo(card){
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(card)
}

export function isName(str){
	return /^[\u4E00-\u9FA5]{2,4}$/.test(str)
}
