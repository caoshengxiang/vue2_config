# axios

[官方文档](https://www.npmjs.com/package/axios)

[推荐教程](http://www.jianshu.com/p/df464b26ae58)

axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端

>从浏览器中创建 XMLHttpRequest
 从 node.js 发出 http 请求
 支持 Promise API
 拦截请求和响应
 转换请求和响应数据
 取消请求
 自动转换JSON数据
 客户端支持防止 CSRF/XSRF


 注意： [axios的作者明确表态不支持jsonp](https://github.com/axios/axios/issues/342)

 ## 跨越
 
 ### cors
[cors推荐](http://www.ruanyifeng.com/blog/2016/04/cors.html)
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。

### postmessage


## Error: [vuex] vuex requires a Promise polyfill in this browser.

vuex中使用axios,axios就是基于promise. ie下不支持promise

解决方案：

```
    npm install --save-dev bable-polyfill
```

`"babel-polyfill": "^6.26.0",`

修改webpack配置
```
    entry: { // 入口
                // index: path.join(__dirname + '/../src/index.js')
                index: ["babel-polyfill", path.join(__dirname + '/../src/index.js')] // 解决IE不兼容【IE报vuex requires a Promise polyfill in this browser问题解决】
            },
```
[polyfill](https://babeljs.io/docs/usage/polyfill/)

## polyfill-eventsource added missing EventSource to window
