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