# js this理解

this的指向一直是困扰问题

在Javascript中this总是指向调用它所在方法的对象。因为this是在函数运行时，自动生成的一个内部对象，只能在函数内部使用。

## 全局的函数调用
```
function f() {
    console.log(this)
}
f() // window
```

### 对象方法的调用
```js
function showName() {
        console.log(this.name);
    }
    var obj = {};
    obj.name = "ooo";
    obj.show = showName;
    obj.show(); //ooo
```
指向当前对象

### 构造函数的调用
```js
function showName() {
        this.name = "showName function";
    }
    var obj = new showName();
    console.log(obj.name); //showName function
```

### apply/call调用时的this
```js
var value = "Global value";

    function FunA() {
        this.value = "AAA";
    }

    function FunB() {
        console.log(this.value);
    }
    FunB(); //Global value 因为是在全局中调用的FunB(),this.value指向全局的value
    FunB.call(window); //Global value,this指向window对象，因此this.value指向全局的value
    FunB.call(new FunA()); //AAA, this指向参数new FunA()，即FunA对象

    FunB.apply(window); //Global value
    FunB.apply(new FunA()); //AAA
```
在上述代码中，this的指向在call和apply中是一致的，只不过是调用参数的形式不一样。call是一个一个调用参数，而apply是调用一个数组。具体的会在以后的博文中单独阐述。