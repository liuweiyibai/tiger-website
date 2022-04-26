// 获取屏幕高度
export function getClientHeight() {
  return (
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  )
}

// 获取滚动高度
export function getScrollTop() {
  var scrollTop = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}

/**
 * 获取浏览器版本
 * @returns
 */
export function getBrowserVersion() {
  var userAgent = navigator.userAgent //取得浏览器的userAgent字符串
  var isIE =
    userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 //判断是否IE<11浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE //判断是否IE的Edge浏览器
  var isIE11 =
    userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1 //判断是否IE11浏览器
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion == 7) {
      return 7
    } else if (fIEVersion == 8) {
      return 8
    } else if (fIEVersion == 9) {
      return 9
    } else if (fIEVersion == 10) {
      return 10
    } else {
      return 6 //IE版本<=7
    }
  } else if (isEdge) {
    return 'edge' //edge
  } else if (isIE11) {
    return 11 //IE11
  } else {
    return -1 //不是ie浏览器
  }
}

// 模拟 setInterval
export function _setInterval(fn, millisec, count) {
  let timer
  function interval() {
    if (typeof count === 'undefined' || count-- > 0) {
      timer = setTimeout(interval, millisec)
      try {
        fn()
      } catch (e) {
        count = 0
        throw e.toString()
      }
    }
  }
  timer = setTimeout(interval, millisec)
  return {
    callback: () => clearTimeout(timer),
  }
}
