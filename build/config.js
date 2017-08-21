/**
 * Created by allen on 17-7-4.
 */
var path = require('path');
module.exports = {
    dev: {
        // host: '192.168.1.127',  // 主机或IP
        host: 'localhost',  // 主机或IP
        port: 8800, // 设置端口号
        assetsPublicPath: '',
        contentBase: path.join(__dirname, '/../dist'),
        proxyTable: { // 设置代理服务器
            '/api': {
                target: 'http://47.95.6.138:8080',
                secure: false
            }
        }
    },
    build: {

    }

}
