# 前端测试

## 测试

### unit 单元测试

* karma 测试运行框架(运行在浏览器)
* mocha 测试框架 \[其他测试框架jasmine 自带断言库]
* chai 断言库（expect风格，接近自然预言） \[其他should.js]

### e2e 端到端测试

* nightwatch

> 个人理解unit和e2e就是所谓的白盒测试和黑盒测试，

### 测试覆盖率


### 测试环境

* 浏览器下测试
* node环境下的测试



## vue 测试遇到的错误

* karma 运行错误

![](assets/err1.png)

![](assets/err1.png)

解决方案：

[这里有个评论中找到的答案](http://www.jianshu.com/p/a515fbbdd1b2)

> phantomjs 需要自己安装在电脑

[安装方法](http://blog.csdn.net/sinat_21302587/article/details/53580491?locationNum=3&fps=1)

* nightwatch 运行出错

![](assets/err1.png)

解决方案：
[这里有个评论中找到的答案](https://stackoverflow.com/questions/40432460/error-retrieving-a-new-session-from-the-selenium-server#)

>当我使用vue-cli init我的项目时，我遇到了同样的问题。在我更新到Java 9之后，这个问题解决了。

[jdk的安装](http://blog.csdn.net/oh_mourinho/article/details/52691398)


## vue 测试