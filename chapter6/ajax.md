# AJAX xhr


### AJAX = 异步 JavaScript 和 XML。

    1.XMLHttpRequest 对象
        var xhr = new XMLHttpRequest();

    2.如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
        xmlhttp.open("GET","test1.txt",true);
        xmlhttp.send();
        参数：
方法 | 描述
        ---|---
        open(method,url,async) | 规定请求的类型、URL             以及是否异步处理请求。 method：请求的类型；GET 或 POSTurl：文件在服务器上的位置；async：true（异步）或 false（同步）==注意==：XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：
        send(string) | ==将请求发送到服务器==。string：仅用于 POST 请求；当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数；当您使用 async=false 时，请不要编写 onreadystatechange 函数

    3.如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
```
xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");
```

    4.服务器响应
属性 | 描述
---|---
responseText | 获得字符串形式的响应数据。
responseXML | 获得 XML 形式的响应数据。

    5.onreadystatechange 事件


属性 | 描述
---|---
onreadystatechange | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
readyState | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 请求处理中4: 请求已完成，且响应已就绪
status | 200: "OK",404: 未找到页面


```
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            // xhr.responseText
            // xhr.responseXML
        }
    }
```
