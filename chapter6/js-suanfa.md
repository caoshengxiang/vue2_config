# 前端算法

## 数组去重

1. 一行代码去重

```
Array.from(new Set([1, 1, 1, 2, 3, 2, 4])); // [1, 2, 3, 4]
```

```
// 附：ES5实现数组去重

var array = [1, '1', 1, 2, 3, 2, 4];
var tmpObj = {};
var result = [];
array.forEach(function(a) {
  var key = (typeof a) + a;
  if (!tmpObj[key]) {
    tmpObj[key] = true;
    result.push(a);
  }
});
console.log(result);
// => [1, "1", 2, 3, 4]
```