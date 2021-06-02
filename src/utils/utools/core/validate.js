/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-26 16:15:24
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-06-01 10:11:25
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
 * @name 校验身份证号码
 * @param { String } card 身份证号码
 */
export function isCardNo(card) {
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  return /(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(card)
}

/**
 * @name 校验邮箱
 * @param { String } email 邮箱号码
 */
/**
 * 验证电子邮箱格式
 */
export function isEmail(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

/**
 * 验证十进制数字
 */
export function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证是否为一个 url 地址
 * @param { string } value - 需要验证的地址字符串
 * @returns { boolean }
 */
export function isUrl(value) {
  return /^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/.test(String(value))
}
