# js 原型链理解

## 对象

1. 普通对象

2. 原型对象
原型是一个对象，其他对象可以通过它实现属性继承

3. 函数对象

>凡是通过new Function()创建的都是函数对象。有__proto__、prototype属性（指向原型对象）。Function、Object、Array、Date、String、自定义函数

## prototype 和 \_proto_

prototype是函数才有的属性，prototype的属性值是一个对象，是属性的集合

\_proto_是每个对象都有的属性，但他不是规范属性，部分浏览器实现。
每创建一个函数都会有一个prototype属性，这个属性是一个指针，指向一个对象（通过该构造函数创建实例对象的原型对象）

## 原型链

原型链是实现继承的主要方法。其基本思想是：利用原型让一个引用类型继承另一个应用类型的属性和方法。


### 继承

```js
function A（）{
this.Aproperty = "111";
}

A.prototype.getA = function(){
return this.Aproperty;
};

function B(){
this.Bproperty = "222";
}

B.prototype = new A();//B继承A
B.prototype.getB = function(){
return this.Bproperty;
};

var C = new B();
console.log(C.getA());//111
```

### call apply继承


网上找的四张图方便理解

![](assets/prototype1.png)

![](assets/prototype2.png)

![](assets/prototype3.png)