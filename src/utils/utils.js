/*
* 获取设备平台
*
* ＠method platform
*
* @return {String} 返回平台字符串
*
* */

export default function platform() {
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