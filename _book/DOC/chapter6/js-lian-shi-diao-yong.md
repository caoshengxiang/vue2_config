# js对象的链式调用



```
<script>
  var obj = {
      value: 1,
      add: function (v) {
          this.value += v;
          return this; // 当创建的方法其返回值无任何意义时，可以返回一个this，可实现链式调用
      },
      shout: function () {
          console.info("value:" + this.value)
      }
  }

  // 链式调用调用

    obj.add(5).shout();

  // 逐个调用
    obj.add(5);
    obj.shout();

</script>

```

### 优点:
    1. 节省输入字符，代码简洁，易读
    2.  帮助你考虑代码分割，提高代码可维护

### 缺点：
    1. 难调试


### 语法糖
    向编程语言中添加便利的功能称之为语法糖或糖