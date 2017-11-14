/*
* 获取设备平台
*
* @method platform
*
* @return {String} 返回平台字符串
*
* */

export function platform() {
    let userAgentInfo = navigator.userAgent;

    let Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    let pc = 'Pc'
    let platformStr = null;

    Agents.forEach((item)=>{
        if (userAgentInfo.indexOf(item) > 0) {
            platformStr = item
        }
    })
    if (!platformStr) {
        platformStr = pc
    }

    return platformStr
}

/*eslint-disable*/
export function iOSOrAndroid () {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if(isAndroid) {
        return 'Android'
    } else if (isiOS) {
        return 'iOS'
    }
}
/*eslint-enable*/

/*
* 解析地址栏参数
*
* @method getQueryObj
*
* @param
*
* @return {Object} 返回query参数对象
*
* */
export function getQueryObj() {
    let href = window.location.href
    let query = href.substr(href.indexOf('?')+1)
    let arr = query.split('&')
    let queryObj = {}

    for (let i = 0; i < arr.length; i++) {
        let keyVal = arr[i].split('=')

        queryObj[keyVal[0]] = keyVal[1]
    }
    return queryObj
}

/*
* 时间戳转 yy-MM-dd hh:mm:ss
*
* @method
*
* @param {Timestamp} 时间戳
*
* @return {Obj} yy-MM-dd hh:mm:ss
* */
export function formatDateTime (Timestamp) {
    let date = new Date(Timestamp)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? ('0' + m) : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    let h = date.getHours()
    h = h < 10 ? ('0' + h) : h
    let minute = date.getMinutes()
    let second = date.getSeconds()
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}