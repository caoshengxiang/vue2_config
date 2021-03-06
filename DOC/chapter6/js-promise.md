# js promise理解

## Javascript语言将任务的执行模式分成两种：同步（Synchronous）和异步（Asynchronous）

"同步模式"就是上一段的模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；
"异步模式"则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。

## 四种异步编程的方式
### 回调函数

这是异步编程最基本的方法。

### 事件监听

### 发布/订阅

### promise

Promises对象是CommonJS工作组提出的一种规范,它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数
[四种异步编程的方式链接](https://segmentfault.com/a/1190000003028634)

promise的核心是有一个promise对象，这个对象有一个重要的then()方法, 它用于指定回调函数

####Promise对象有以下几种状态:

1. pending: 表示一个初始状态, 非 fulfilled 或 rejected。
2. fulfilled: 成功的操作。
3. rejected: 失败的操作。