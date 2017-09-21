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

/*eslint-disable*/
/*
* 获取当前时间“yyyy-MM-dd HH:MM:SS”
* */

export function getNowFormatDate() {
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();

    return currentdate;
}
/*eslint-enable*/