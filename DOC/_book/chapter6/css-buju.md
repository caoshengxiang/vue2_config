# 布局方案总结

## 盒模型

包括内容content(width,height),padding,border,margin

老版本ie盒子模型　padding和border包含在content

box-sizing跟盒子模型有关

1. content-box 默认，总宽度=margin+border+padding+width
2. border-box　总宽度=margin+width
3. inherit　从父元素继承 box-sizing 属性的值

## display
inline、block、inline-block、flex等

## position
relative,absolute,fixed等

## float
left,right,both等

## flex布局方案
比起盒子模型，flex布局很容易实现垂直居中，流式布局
1. flex-direction
2. flex-wrap
3. flex-flow
4. justify-content
5. align-items
6. align-content
[看这里](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 居中布局
1. 行内元素父元素设置 text-align:center
2. 块状元素居中`margin:0 auto;`
3. 子元素inline-block + 父元素text-align
4. position:absolute; left: 50%; (或calc(50%-width/2))
5. flex + justify-content
6. float + position

<font color=red>calc()能让你给元素的做计算</font>[看这里很详细介绍](http://www.w3cplus.com/css3/how-to-use-css3-calc-function.html)

## 垂直居中
1. 表格，vertical-align:middle;
2. 块状元素line-height: 100px;
3. flex + align-items

水平和垂直居中推荐用flex方案，

## 左边固定右边自适应

1. float + margin
```css
.left {
    float: left;
    width: 100px;
}
.right {
    margin-left: 100px;
}
```
2. float + overflow （BFC）
```css
.left {
    float: left;
    width: 100px;
}
.right {
    overflow: hidden;
}
```
3. flex
```css
.parent {
    display: flex;
}
.left {
    width: 100px;
}
.right {
    flex: 1
}
```

4. position

## 适配

* 弹性布局
* 自适应布局
* 流式布局
* 响应式布局

### 布局及设置meta标签
做手机网站必加的一句头部(head)代码

`<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">  `
>name="viewport"
  名称=视图
 width=device-width
  页面宽度=设备宽度(可以理解为获取你手机的屏幕宽度)
 initial-scale - 初始的缩放比例
 minimum-scale - 允许用户缩放到的最小比例
 maximum-scale - 允许用户缩放到的最大比例
 user-scalable - 用户是否可以手动缩放

### 通过媒体查询来设置样式media query
>media query 是响应式设计的核心，它能够和浏览器进行沟通，告诉浏览器页面如何呈现，假如一个终端的分辨率小于980px，那么可以这样写
```
@media screen and (max-width:980px)
/**ipad**/
@media only screen and (min-width:768px)and(max-width:1024px){}
/**iphone**/
 @media only screen and (width:320px)and (width:768px){}
```

### rem
css3引入了新的单位叫做rem,和em类似但对于Html元素，rem更方便使用。
[关于rem文章](http://www.cnblogs.com/YYvam1288/p/5123272.html)

`rem = px / fontSize`

我用的sass函数计算的解决方案，如下：
```css
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
```

### 响应式设计需要注意的问题
1. 宽度不固定，可以使用百分比
2. 图片处理设定width,高度自适应

## 网格布局
接触过得css框架中用到的bootstrap、element，原理都是将一行为24个单元格

## 其他的一些方案
淘宝的flexible方案
原理Flexible会将视觉稿分成100份（主要为了以后能更好的兼容vh和vw），而每一份被称为一个单位a。同时1rem单位被认定为10a。

```
1a   = 7.5px
1rem = 75px
```
10a，也就是整个宽度为10rem，<html>对应的font-size为75p;根据屏幕像素动态的修改font-size


###