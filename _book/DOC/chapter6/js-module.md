# js 模块化

* CommonJS 加载模块是同步的，所以只有加载完成才能执行后面的操作。服务器端模块的规范[Node.js,webpack]
* AMD异步加载模块[require,seajs]

## commonJS

```js
// module add.js
module.exports = function add (a, b) { return a + b; }

// main.js
var {add} = require('./math');
// i hate sync
console.log('1 + 2 = ' + add(1,2);
```

## AMD

```js
// module add.js
define(function () {
  return {
    add: function (a, b) add { return a + b; }
  };
});

// main.js
require(['add'], function (add) {
  //i hate callback
  console.log('1 + 2 = ' + add(1,2);
});
```

## CMD

AMD和CMD很像

## ES6模块化

```js
// module add.js
export function add (a, b) { return a + b; }

// main.js
// i hate static
import {add} from 'add.js';
```

## webpack模块化
webpack的模块不仅指js，包括css、图片等资源都可以以模块看待。

>整个打包生成的代码是一个IIFE(立即执行函数),函数参数是我们写的各个模块组成的数组，只不过我们的代码，被webpack包装在了一个函数的内部，也就是说我们的模块，在这里就是一个函数。为什么要这样做，是因为浏览器本身不支持模块化，那么webpack就用函数作用域来hack模块化的效果。

> webpack是commonjs，原理就是实现exports和require，然后自动加载入口模块，控制缓存模块

```js
(function(modules) { // webpackBootstrap
    // The module cache
    var installedModules = {};
    // The require function
    function __webpack_require__(moduleId) {
        // Check if module is in cache
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // Create a new module (and put it into the cache)
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        // Execute the module function
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        // Flag the module as loaded
        module.l = true;
        // Return the exports of the module
        return module.exports;
    }
    // expose the modules object (__webpack_modules__)
    __webpack_require__.m = modules;
    // expose the module cache
    __webpack_require__.c = installedModules;
    // define getter function for harmony exports
    __webpack_require__.d = function(exports, name, getter) {
        if(!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            });
        }
    };
    // getDefaultExport function for compatibility with non-harmony modules
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ?
            function getDefault() { return module['default']; } :
            function getModuleExports() { return module; };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    // __webpack_public_path__
    __webpack_require__.p = "";
    // Load entry module and return exports
    return __webpack_require__(__webpack_require__.s = 0);
})
/************************************************************************/
([
/* 0 */
(function(module, exports, __webpack_require__) {

"use strict";

var bar = __webpack_require__(1);
bar();

}),
/* 1 */
(function(module, exports, __webpack_require__) {

"use strict";

exports.bar = function () {
    return 1;
}

})
]);

```

## webpack对ES模块化的支持

[这里有一片文章](https://segmentfault.com/a/1190000010955254)


require() 是 CommonJS 的实现，用于运行时加载，推荐阅读 require() [源码解读](http://www.ruanyifeng.com/blog/2015/05/require.html)

import 是 ECMAScript 6 Module 的语法，编译时加载，import 是静态执行，推荐阅读 [import 命令](http://es6.ruanyifeng.com/?search=System.import&x=0&y=0#docs/module#import-)