# 跨域理解，同源

## 同源策略
同源是指，域名，协议，端口相同当浏览器运行一个JS脚本时会进行同源检测，如果不同源是不能执行的。

为什么使用同源策略？
一个重要原因就是对cookie的保护

## 跨域
1. document.domain + iframe

2. 动态创建script

因为script标签不受同源策略的限制

3. location.hash + iframe

4. window.name + iframe

5. postMessage（跨文档通信）
可以使用它来向其它的window对象发送消息，无论这个window对象是属于同源或不同源，调用postMessage方法的window对象是指要接收消息的那一个window对象，该方法的第一个参数message为要发送的消息，类型只能为字符串；第二个参数targetOrigin用来限定接收消息的那个window对象所在的域，如果不想限定域，可以使用通配符 *  。
需要接收消息的window对象，可是通过监听自身的message事件来获取传过来的消息，消息内容储存在该事件对象的data属性中。


6.  CORS
Cross-origin Resource Sharing跨资源共享，使用自定义的HTTP头部让浏览器与服务器沟通，从而决定请求和响应是否成功。这种方式使用了一个新的Origin请求头和一个新的Access-Control-Allow-Origin响应头扩展了HTTP。
这种方式使用了一个新的Origin请求头和一个新的Access-Control-Allow-Origin响应头扩展了HTTP。允许服务端设置Access-Control-Allow-Origin头标识哪些站点可以请求文件，或者设置Access-Control-Allow-Origin头为"*"，允许任意站点访问文件。


7. JSONP
很简单，就是利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的

8. web sockets

9. nginx代理
[总结在这里](./nginx.html)