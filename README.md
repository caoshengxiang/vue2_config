# 关于
github: https://github.com/caoshengxiang/vue2_config.git

文档: https://caoshengxiang.github.io/vue2_config/

# 技术栈 webpack2+vue2+vuex2+vue-router2+axios+sass+vue-i18n

# 项目安装运行
* npm install
* npm run dev // 开发环境
* npm run build // 生产环境
* npm run release // 部署, 需要配置服务器信息

# i18n国际化
## 1.基于组件化,在页面使用
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

## 2.使用传统的键值文本的形式

## 说明:
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

# 移动端调试
使用 weinre工具
```
启动命令 weinre --httpPort 8081 --boundHost -all-
```

# 使用yarn作包管理

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

# gh-pages 介绍
push 代码后
> `git subtree push --prefix=dist origin gh-pages`

> 项目: `git subtree push --prefix=DOC/_book origin gh-pages`


意思就是把指定的dist文件提交到gh-pages分支上,那这时候，我们看到已经多出了一个gh-pages分支，那么展示地址就是 Github用户名.github.io/创建的仓库名

参考:
http://www.cnblogs.com/MuYunyun/p/6082359.html

# gitbook
gitbook init
gitbook build
gitbook serve
