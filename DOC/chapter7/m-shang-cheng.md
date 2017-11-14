# 手机商城项目

这个项目前期是我做的，由于当时要回学校，所以项目没有做完，后面交给了其他同事．我走前完成了，项目的构建，我的webpack配置也是从这里开始的，移动端界面做了８成左右．还有部分的接口，所有就总结我做了的部分．

效果图，只截图我做时的效果：

![](assets/shangcheng.png)


![](assets/shangcheng2.png)
![](assets/shangcheng3.png)



## 项目技术选择

是的,前期项目是我来做，所以项目调研，技术选型，项目搭建是我做的

### 来看一下技术栈

1. vue@2.3.1
1. vue-router@2.5.3
1. vuex@2.3.1
1. jquery@3.2.1
1. mint-ui@2.2.5
1. flexible.js

### meta viewport

手机浏览器是把页面放在一个虚拟的“窗口”（viewport）中，通常这个虚拟的“窗口”（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：
```
<meta name=”viewport” content=”width=device-width, initial-scale=1, maximum-scale=1″>
```

* width：控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
* height：和 width 相对应，指定高度。
* initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
* maximum-scale：允许用户缩放到的最大比例。
* minimum-scale：允许用户缩放到的最小比例。
* user-scalable：用户是否可以手动缩放

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
```

移动端都使用viewport，

### flexible.js

这里有个[教程](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html),详细使用看这个教程，再多看看其他的总是友好处的．有事例等

这个技术淘宝的一个开源技术[看这里](https://github.com/amfe/lib-flexible)
今天看好像有改动，之前用时看都是一两年前的改动．找空时间去看看．

主要也是使用的meta viewport, rem; 没有理解错的话，flexible是动态修改html font-size的大小．

注意：750px以上,flexible认为不再是移动端

使用，引入两个文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
    <title>cinegear</title>
    <script src="../static/vendor/flexible_css.js"></script>
    <script src="../static/vendor/flexible.js"></script>
</head>
<body>
    <div id="app">
        <app></app>
    </div>
</body>
</html>
```
`flexible_css.js`和`flexible.js`，都在[github](https://github.com/amfe/lib-flexible)上下载

在这里再讲讲，ES6模块中要引入一个三方的js文件（非模块化的）,如上面的代码．全局引入文件．直接在webpack打包的入口html文件中引入．不能在模块中引入`import 'flexible.js'`

我在做三方登陆时也遇到了这个问题，需要引入一段js

```html
<!--QQ-->
    <script type="text/javascript" src="http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js" data-appid="1106291055"  charset="utf-8" data-callback="true"></script>

    <!--微薄-->
    <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=2973172615&debug=true" type="text/javascript" charset="utf-8"></script>

    <!--微信-->
    <script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script>
```
我当然想过直接把js复制出来，保存在本地．．可能姿势不对


### rem

移动端单位使用[rem](http://www.w3cplus.com/css3/define-font-size-with-css3-rem)，相对html单位, 还有[em](http://www.runoob.com/w3cnote/px-em-rem-different.html)相对于父元素的font-size

单位都是rem，[ rem 值与 px 之间的换算](https://lms.im/css/1069.html),人工换算好麻烦，当然的找其他方法

我的是这样做的通过一个sass函数来转换

var.scss 定义的是一些基本变量，如：颜色值,文件内容如下：
```
$base-font-size: 37.5px; // html字体大小
```

fun.scss:
```sass
@import "./var";

/** px2rem
* @param $px 像素值
* @param $base-font-size html字体大小
* @return rem
*/
@function px2rem($px, $base-font-size: $base-font-size) {
  @if (unitless($px)) {
    @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels for you";
    @return px2rem($px + 0px); // That may fail.
  } @else if (unit($px) == rem) {
    @return $px;
  }
  @return ($px / $base-font-size) * 1rem;
}

```

> 目前Flexible会将视觉稿分成100份（主要为了以后能更好的兼容vh和vw），而每一份被称为一个单位a。同时1rem单位被认定为10a。针对我们这份视觉稿可以计算出：著作权归作者所有。

  原文: http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html © w3cplus.com

```
1a   = 7.5px
1rem = 75px
```
那么我们这个示例的稿子就分成了10a，也就是整个宽度为10rem，<html>对应的font-size为75px：

<font color=red>但是，我设设置的font-size为37.5px才能正确转换</font>,具体什么原因没有找到．猜测和苹果的[像素有关](http://blog.csdn.net/aiolos1111/article/details/51880223)，[iOS像素和Point](http://www.jianshu.com/p/7d0cbaf15786)

使用:
```
@import "fun.scss"

width: px2rem(100px) // 转换为对应的rem值
```

### mint-ui

mint-ui是个移动端的vue的UI组件库．我回来后接我项目的同事告诉我有些组件有些坑．我使用时倒是没有遇到．下次再去研究这些坑．

收集vue的ui库:

[mint-ui](http://mint-ui.github.io/#!/zh-cn)

[vux](https://vux.li/demos/v2/#/)

[vuikit](https://vuikit.js.org/#/table)

[iView](https://www.iviewui.com/)

[vue-antd](http://okoala.github.io/vue-antd/#!/docs/introduce)


---

allen

2017.9.30 记