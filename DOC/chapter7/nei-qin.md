# 公司内部内勤系统

## vue单元测试
[这部分总结在这里](../chapter6/test.html)


## 禁止浏览器自动保存密码

>浏览器保存密码是根据input="password"来判断的，所有我们只要保证浏览器在dom结构中识别不到密码框即可
方法如下：
```
input="text" onfocus="this.type='password'"
```

[Chrome表单文本框自动填充黄色背景色样式](https://www.cnblogs.com/zhaokai021/p/4625169.html)


## 自定义滚动条
[看这里](https://www.lyblog.net/detail/314.html)

## promise在IE兼容

### Error: [vuex] vuex requires a Promise polyfill in this browser.

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

>打开package.json看看polyfill相关组件是不是放在了devDependencies中，正常情况下要放到dependencies里

### polyfill-eventsource added missing EventSource to window
>应该是polyfill-eventsource自身代码的问题。
 Issue里面给出的解决方案是使用event-source-polyfill

参照此[GitHub Issue](https://github.com/glenjamin/webpack-hot-middleware/issues/53#issuecomment-253969556)

> 这可能不是一个错误，代码自身有问题，需要逐一排查。这里发现的问题是使用了elementUI 的布局， el-aside组件问题。去除后正常
