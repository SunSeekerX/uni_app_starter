/**
 * 按类型格式化日期
 * @param {*} date 具体日期变量
 * @param {string} dateType 需要返回类型
 * @return {string} dateText 返回为指定格式的日期字符串
 */
export function getFormatDate(date, dateType) {
  const dateObj = new Date(date)
  let month = dateObj.getMonth() + 1
  let strDate = dateObj.getDate()
  let hours = dateObj.getHours()
  let minutes = dateObj.getMinutes()
  let seconds = dateObj.getSeconds()

  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  if (hours >= 0 && hours <= 9) {
    hours = '0' + hours
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = '0' + minutes
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = '0' + seconds
  }

  const dateText =
    dateObj.getFullYear() +
    '年' +
    (dateObj.getMonth() + 1) +
    '月' +
    dateObj.getDate() +
    '日'
  switch (dateType) {
    case 'yyyy-mm-dd':
      return (
        dateObj.getFullYear() +
        '年' +
        (dateObj.getMonth() + 1) +
        '月' +
        dateObj.getDate() +
        '日'
      )
    case 'yyyy.mm.dd':
      return (
        dateObj.getFullYear() +
        '.' +
        (dateObj.getMonth() + 1) +
        '.' +
        dateObj.getDate()
      )
    case 'yyyy-mm-dd MM:mm:ss':
      return (
        dateObj.getFullYear() +
        '-' +
        month +
        '-' +
        strDate +
        ' ' +
        hours +
        ':' +
        minutes +
        ':' +
        seconds
      )
    case 'mm-dd MM:mm:ss':
      return month + '-' + strDate + ' ' + hours + ':' + minutes + ':' + seconds
    case 'mm-dd MM:mm':
      return month + '-' + strDate + ' ' + hours + ':' + minutes
    case 'yyyy年mm月dd日 MM:mm:ss':
      return (
        dateObj.getFullYear() +
        '年' +
        month +
        '月' +
        strDate +
        '日' +
        ' ' +
        hours +
        ':' +
        minutes +
        ':' +
        seconds
      )
    default:
      return dateText
  }
}

export function filterTime(time) {
  if (time) {
    const diffTime = new Date().getTime() - new Date(time).getTime() //相差时间
    const days = diffTime / (24 * 3600 * 1000)
    if (days > 1) {
      return Math.floor(days) + '天前'
    } else {
      const hours = diffTime / (60 * 60 * 1000)
      if (hours > 1) {
        return Math.floor(hours) + '小时前'
      } else {
        const minutes = diffTime / (60 * 1000)
        if (minutes > 1) {
          return Math.floor(minutes) + '分钟前'
        } else {
          return '刚刚'
        }
      }
    }
  } else {
    return null
  }
}
