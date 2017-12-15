# js 编码

js对url编解码三个方法


1. escape 和 unescape

对除ASCII字母、数字、标点符号 @  *  _  +  -  .  / 以外的其他字符进行编码。

```js
escape('http://www.baidu.com/#/?name=曹')
"http%3A//www.baidu.com/%23/%3Fname%3D%u66F9"
```

2. encodeURI 和 decodeURI

返回编码为有效的统一资源标识符 (URI) 的字符串，不会被编码的字符：! @ # $ & * ( ) = : / ; ? + '

encodeURI()是Javascript中真正用来对URL编码的函数。
```js
encodeURI('http://www.baidu.com/#/?name=曹')
"http://www.baidu.com/#/?name=%E6%9B%B9"
```


3. encodeURIComponent 和 decodeURIComponent

对URL的组成部分进行个别编码，而不用于对整个URL进行编码

```js
encodeURIComponent('http://www.baidu.com/#/?name=曹')
"http%3A%2F%2Fwww.baidu.com%2F%23%2F%3Fname%3D%E6%9B%B9"
```