
# 技术栈 webpack2+vue2+vuex2+vue-router2+sass+vue-i18n+elementUI


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

# 更新依赖
> npm update更新命令，只能按照package.js中标注的版本号，进行更新，所以每次都要改下package.js中的版本号为最新才能够更新，高效升级插件npm-check-updates
```
    npm install -g npm-check-updates
```
`npm-check-updates` 或(缩写命令) `ncu`列出要更新的
`ncu -a` 升级全部
`ncu -u` 更新package.json

## 更新webpack@3后postcss报错解决
```
No PostCSS Config found in
```
>
1. 创建postcss.config.js文件，添加如下代码：（引入autoprefixer插件）
```
module.exports = {
  plugins: {
    'autoprefixer': {browsers: 'last 5 version'}
  }
}
```
2. 大概 webpack@2.6 后在webpack中配置不起作用
```
new webpack.LoaderOptionsPlugin({ //浏览器加前缀
                options: {
                    postcss: [require('autoprefixer')({browsers:['last 5 versions']})]
                }
            }),
```