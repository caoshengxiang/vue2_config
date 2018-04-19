# 关于
github: https://github.com/caoshengxiang/vue2_config.git

文档: https://caoshengxiang.github.io/vue2_config/

# vue

## 技术栈
* [vue](https://cn.vuejs.org/v2/guide/)
* [vue-router](https://router.vuejs.org/zh-cn/)
* [vuex](https://vuex.vuejs.org/zh-cn/api.html)
* [axios](https://www.npmjs.com/package/axios)
* jquery
* [socket.io](https://socket.io/)
* [element-ui](http://element.eleme.io/#/zh-CN/component/installation)
* [webpack](https://webpack.js.org/)

## 项目安装运行
* npm install
* npm run dev // 开发环境
* npm run build // 生产环境
* npm run release // 部署, 需要配置服务器信息

### 项目部署

// todo

### 目录说明
```
* sales
  - bash // 脚本文件目录
  - build //
  - config
  - dist
  - src
    - API // 定义所有的接口
    - assets // 会打包到项目
    - components // 通用组件目录，或全局组件
    - element_ui // element-ui的配置
      - index.js // 配置按需引入elementUI
      - element.css // 定义一些用于覆盖element样式
    - pages // 页面目录，按页面逻辑划分
    - router // 路由配置
    - store // store, 按后台功能进行划分模块
    - styles // 样式目录
      - basic.scss // 全局初始化的样式
      - common.scss // 通用样式
      - mixin.scss // 定义一些混合的样式
      - fun.scss // 函数
      - sprites.css // 雪碧图
      - var.scss // 定义变量
    - utils // 工具目录
      - utils.js // 工具函数
      - const.js // 项目中常量，如：url 【这个文件暂时就放在这里】
  - static // 静态目录
  - test // 测试 【这个项目目前应该不会用到，先保留在这里】
  - eslintrc.js // 可添加自己的语法规则，建议统一使用标准
  - 其他配置文件
```

## 可能遇到的问题

## i18n国际化
### 1.基于组件化,在页面使用
```
   <i18n>
    {
      "en": {},
      "cn": {}
    }
   </i18n>
```
  注意: 里面是json数据; (该功能是4月5号发布有很多坑)
  如在不同组件间不通讯(不翻译),解决:利用vuex,存下lang,利用全局混合去监听lang变化,去设置this.$i18n.locale; 利用localStorage解决刷新保存语言问题

### 2.使用传统的键值文本的形式

### 说明:
  注意: 在同一个.vue组件中不能两种方式混用
  1. 翻译input placeholder
  ```
    <input type="text" :placeholder="name">
  ```
  ```
    data() {
      name: this.$t('name')
    },
    watch: {
      lang() {
        this.name = this.$t('name')
      }
    }
  ```

## 移动端调试
使用 weinre工具
```
启动命令 weinre --httpPort 8081 --boundHost -all-
```

## 使用yarn作包管理

## yarn vs npm
>   1. 快
    2. 安全
    3. 处理npm一些遗留问题(比如:模块A依赖模块B,C. BC模块是没用在package.json中指定版本.默认安装都是最新版,多人开发或是过段时间再次安装可能出现版本不兼容,等bug.yarn使用yarn.lock机制)

## yarn 安装
> apt-get install yarn
    (通过官网的安装方式出现了很多未知错误直接用npm install -g yarn 全局安装)

## 命令

>   1. yarn和 yarn install ，这两个命令的效果是一样的，等同于npm install，使用这个命令会在该目录生成一个yarn.lock的文件。
    2. yarn add koa，安装koa模块并更新package.json和yarn.lock文件，等同于npm install koa --save。也可以使用yarn global add koa，等同于npm install koa -g，将模块直接安装到全局环境变量里，方便使用。
    3. yarn list，根据当前项目的package.json查看模块的依赖及版本。
    4. yarn info koa，查看koa模块的详细信息，类似于npm view koa。
    5. yarn init，初始化项目package.json文件，等同于npm init。
    6. yarn run，运行package.json中的script。
    yarn还有很多有用的命令，很简单，大家可以通过yarn help获取帮助信息，或者查看yarn官网的文档，上面说的都很详细。

>    Yarn官网：https://yarnpkg.com/
    Yarn Github地址：https://github.com/yarnpkg/yarn

## 装node-sass始终是坑
>   1. 使用cnpm
    2. 设置淘宝源
    此方案将把下载源指定为cnpm仓库：
    全部的下载源指向cnpm的指令:
    　　npm :
    npm config set registry http://registry.npm.taobao.org
    　　yarn :
    yarn config set registry http://registry.npm.taobao.org
    　只指定node-sass的下载源：
    　　npm：
    npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
    　　yarn：
    yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
    (网上方法都是扯淡,包括用第二步也是不行,第二步安装玩后node-sass编译会报错,删除node_modules下的node-sass,再使用cnpm install安装)

## gh-pages 介绍
push 代码后
> `git subtree push --prefix=dist origin gh-pages`

> 项目: `git subtree push --prefix=DOC/_book origin gh-pages`


意思就是把指定的dist文件提交到gh-pages分支上,那这时候，我们看到已经多出了一个gh-pages分支，那么展示地址就是 Github用户名.github.io/创建的仓库名

参考:
http://www.cnblogs.com/MuYunyun/p/6082359.html

## gitbook
gitbook init
gitbook build
gitbook serve


## 可能遇到的问题

### 组件内不能覆盖element-ui样式
```
import 'element-ui/lib/theme-chalk/index.css'
import './element.css' // 自定义样式覆盖element-ui 默认并且不能修改的样式
```
>将要覆盖的样式，在import element样式之后引入，如上。css 写在element.css中

### 自动打开浏览器

```js
// 各种设备设置信息
host: 'localhost', //主机名
port: 8080, // 端口号（默认8080）
autoOpenBrowser: false,//是否自动打开浏览器
//想让浏览器自动打开，只需将false改为true即可，为防止端口号冲突，这里也可以随意更改端口号
```

### 配置目录

```js
// config/index.js
// Paths
    assetsSubDirectory: 'static', // 设置静态目录，assets 目录打包到项目; static 目录直接复制到dist/static,使用绝对路径
    assetsPublicPath: '/', // 打包后的路径，dev 一般都是/，build 根据情况配置
```

### 代理
```js
dev: {
    // config/index.js
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: { // 配置代理
      '/precision': {
        target: 'http://test.dcstar-inc.com:9567/precision',
        changeOrigin: true,
        pathRewrite: {
          '^/precision': ''
        }
      }
    },
```

### 直接打开index.html 无法打开

[链接](https://blog.csdn.net/theoneemperor/article/details/78155644)

### 配置全局变量
```js
module: {
    rules: [
    ]
},
plugins: [
    new webpack.ProvidePlugin({ // 配置全局变量
      $:"jquery",
      jQuery:"jquery",
      $axios: 'axios'
    })
  ],
```

### sass报错

<font color="red">如果sass-node无法安装，尝试使用cnpm 安装</font>

组件中要使用sass,要
```
<style scoped lang="sass" rel="stylesheet/scss">
```
报错,类似：
```
Failed to compile.

./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-656039f0","scoped":true,"hasInlineConfig":false}!./node_modules/_sass-loader@7.0.1@sass-loader/lib/loader.js?{"indentedSyntax":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/HelloWorld.vue
Module build failed:
undefined
       ^
      Invalid CSS after "h1, h2 {": expected "}", was "{"
      in D:\works\sales\src\components\HelloWorld.vue (line 99, column 9)
 @ ./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-656039f0","scoped":true,"hasInlineConfig":false}!./node_modules/_sass-loader@7.0.1@sass-loader/lib/loader.js?{"indentedSyntax":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/HelloWorld.vue 4:14-420 13:3-17:5 14:22-428
 @ ./src/components/HelloWorld.vue
 @ ./src/router/index.js
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/main.js
```
改成：
```
<style scoped lang="scss" rel="stylesheet/scss">
```

### IE下报错：[vuex] vuex requires a Promise polyfill in this browser.
```
  entry: { // 入口
            // index: path.join(__dirname + '/../src/index.js')
            index: ["babel-polyfill", path.join(__dirname + '/../src/index.js')] // 解决IE不兼容【IE报vuex requires a Promise polyfill in this browser问题解决】
    },
```

### 组件内不能覆盖element-ui样式
```
import 'element-ui/lib/theme-chalk/index.css'
import './element.css' // 自定义样式覆盖element-ui 默认并且不能修改的样式
```
>将要覆盖的样式，在import element样式之后引入，如上。css 写在element.css中

### 使用webstorm【crl+shift+l】eslint报错

可在websorm中设置：
File -> Settings -> Code Style -> JavaScript 个性化进行设置
> 更好的方式，在这个窗口右上角点击 `Set From...`  -> `Predefined Style` -> `JavaScript Standard Style` 可配置标准风格

<font color="red">也会有少数语法会报错，遇到也只能手动对这些错误语法配置，如果实在找不到对应配置格式，只能暂时在 `.eslintrc.js` 中禁用</font>

如未解决的一个问题：
【ctl+shift+l】后，这样
```
<script>
  var a = null
  function f () {
    var a = 1
  }
</script>
```
但eslint标准风格要求，script下是不空格,这样
```
<script>
var a = null
function f () {
  var = 1
}
</script>
```