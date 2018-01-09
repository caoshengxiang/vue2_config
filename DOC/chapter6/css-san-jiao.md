# css-css实现三角绘制

* 下面代码利用border绘制四个等腰三角形

<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/eddgb7jf/embedded/result,html,css/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>


* 第二步,去掉border-left;可以看到只要去掉去掉border-top和border-bottom的颜色就是一个向左三角

<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/26m4Lhdo/1/embedded/result,html,css/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

* 第三步 border-top和border-bottom的颜色设为透明

<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/26m4Lhdo/2/embedded/result,html,css/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

三角就绘制完成,接下来是展示分别绘制上下左右的三角:

<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/26m4Lhdo/3/embedded/result,html,css/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

控制边长:

用向上三角举例:
```
  border-bottom: 50px solid blue; // 50px上点到底边中点距离

  border-right: 50px solid transparent; // 50px,左点到底边中点的距离

  border-left: 50px solid transparent; // 50px,右点到底边中点的距离
```


## 带阴影

<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/26m4Lhdo/5/embedded/result,html,css/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

其他方法:

<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/rqee3hL7/2/embedded/result,html,css/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>