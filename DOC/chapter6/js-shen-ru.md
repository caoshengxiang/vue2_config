# js 深入了解

### 1. call与apply
> 区别：传递参数的方式不同，第一个参数都指向绑定到该函数的内部的this一个对象；区别在第二个参数，一个是序列一个是数组数组，传递给函数。

> 事例：sub　继承　add

```
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

### 2.对象的拷贝


1. o = $.extend(true, {}, obj)

2. Object.assign({}, obj)

3. const obj1 = JSON.parse(JSON.stringify(obj));