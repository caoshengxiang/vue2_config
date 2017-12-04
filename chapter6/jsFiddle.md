# 代码分享 jsFiddle

写博客更高级的玩法，使用jsFiddle展示代码

看一个实例：

<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/aph51f3t/2/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## 编辑区

### Html

在html编辑区输入的代码会被会被放在<body>和</body>之间。因此请不要输入诸如doctype，head之类的标签，因为这些标签会在后台自动生成。

### css

在css编辑区输入的代码会以内部样式表的形式放置在head部分。

### javascript

在javascript编辑区输入的代码会被放在head的Script标签当中。也就是head的 <script type="text/javascript"> 和 </script>

### result

这是一个只读区域，用于显示程序运行的结果。只需点击run就可以查看结果。


## 菜单
### Save:

将当前编辑的内容保存到服务器上，方便下次调用和分享。如果你只是想测试用的话是不需要保存的。

### Update：

将当前的状态保存为一个版本。类似于版本控制，会在URL后面加上一个数字。之前的版本还会存在，方便后期调试。

### Fork:

把现在的项目复制到一个新的文件当中。

### Base:

出现在没有进行Update的项目当中，表明这是最初效果，只是一个标识符。

### Set as base:

出现在非初始版本的项目中。可点击，作用是把当前版本变成最初版本，原先的初始版本会被删除。

### Share:

提供了分享的三种形式。

### Run:

点击运行代码，结果会在result中显示。

### Debug on mobile:

在手机端调试。

### Tidyup:

格式化代码。

### JSHint:

##  功能区

###  Frameworks & Extensions:

第一个下拉菜单中列出了所有支持的框架，选择一个框架之后会在<head>中引入此框架。如果选择No-Library则不会加载任何框架。

第二个下拉菜单选择加载框架的时间。（下面四种情况为个人理解，不保证正确）

### onLoad:

加载完页面当中的所有元素之后运行。

### onDomReady:

加载完页面所有的节点之后运行。

### no wrap – in <head>:

在head中引入框架。（按顺序执行）。

###  no wrap – in <body>:

在body中引入框架。（按顺序执行）。

###   Fiddle options

#### Title:

在你的个人中心中显示的项目名称。

#### Description:

在你的个人中心中显示的项目描述。

#### Normalized CSS:

如果选择了这个复选框就会使用网站提供的 normalize.css（用于移除默认样式）。

### Body Tag:

为body添加属性,比如：<body class="dark_ui">

### DTD：

选择标志符的语法规则，默认为html5

### Framework <script> attribute:

可以为Script标签添加属性。比如<script type="text/javascript"src="/js/lib/someframework.js" {attributes}></script>

### External Resources

添加外部资源。


## 分享代码

`http://{url of the fiddle}/embedded/[{tabs}/{style}]]/`

tabs:的默认展示顺序：js,resources,html,css,result

例子：
```html
<iframe width="100%" height="300" src="//jsfiddle.net/caoshengxiang/aph51f3t/1/embedded/result,html,css,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
```


[这里有一篇很好的博客](http://www.cnblogs.com/qdlife/p/3476178.html)

[官方说明文档](http://doc.jsfiddle.net/index.html)