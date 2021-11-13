/**
 * 国际化
 * @author: SunSeekerX
 * @Date: 2021-05-05 22:13:25
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2021-08-10 21:50:27
 */

import en_US from './en_US'
import zh_CN from './zh_CN'

const langs = {
  en_US,
  zh_CN,
}

export default function $t(locale, key) {
  return langs[locale][key]
}
