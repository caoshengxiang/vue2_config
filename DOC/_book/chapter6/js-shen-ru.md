# js 深入了解

## 1. call与apply
> 区别：传递参数的方式不同，第一个参数都指向绑定到该函数的内部的this一个对象；区别在第二个参数，一个是序列一个是数组数组，传递给函数。

> 事例：sub　继承　add

```js
function add() {
  this.a = 'a';
  this.say = function() {
    alert(this.a);
  };
}
function sub() {
  add.call(this);
  this.a = 'sub';
}
console.log(new sub()) //
```

## 2.对象的拷贝


1. o = $.extend(true, {}, obj)

2. Object.assign({}, obj)

3. const obj1 = JSON.parse(JSON.stringify(obj));


## js 右键菜单

1. 整个页面所有的右击事件
```js
document.oncontextmenu = function(){
　　return false;
}
```
或:
```js
document.oncontextmenu = function(e){
    e.preventDefault();
};
```
2. 特定的区域
```js
document.getElementById("test").oncontextmenu = function(e){
   return false;
}
```
3. 去掉后可以给喜欢区块加特定的事件
```js
document.getElementById("test").onmousedown = function(e){
　　if(e.button ==2){
　　　　alert("你点了右键");
　　}else if(e.button ==0){
　　　　alert("你点了左键");
　　}else if(e.button ==1){
　　　　alert("你点了滚轮");
　　}
}
```

## 3. js方法汇总


方法名|作用|例子
---|---|---
toUpperCase()   |转换成大写      |
toUpperCase()   |转换成小写      |

正则方法 reg方法／string方法

方法名|作用|例子
---|---|---
test()          |返回 Boolean   | //g.test(str)
exec()          |查找并以数组的形式返回   | var arr = reg.exec(str);
match()         | 查找的结果作为数组返回  |stringObj.match(rgExp)
search()        |返回与正则表达式查找内容匹配的第一个子字符串的位置|stringObj.search(rgExp)
replace()       |返回根据正则表达式进行文字替换后的字符串的复制 | stringObj.replace(rgExp, replaceText)
split()         |将一个字符串分割为子字符串，然后将结果作为字符串数组返回|stringObj.split([separator[, limit]])


## 4. js中的各种位置

top、clientTop、scrollTop、offsetTop、scrollHeight、clientHeight、offsetParent
网上找的图片展示：

![](assets/js_pos.jpg)

[这里有更详细介绍](http://www.softwhy.com/forum.php?mod=viewthread&tid=8298)