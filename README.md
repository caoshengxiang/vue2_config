# 商城移动端

# 移动端设计稿
https://pro.modao.cc/app/H30rdsByMVGtxCR5SfWNfJN3nKbICMb
# pc端设计稿
https://pro.modao.cc/app/C5qYdhLydegH4pYIer2z2N4IPb1Ywlw#screen=s02EF84392A1491890727271

# 技术栈 webpack2+vue2+vuex2+vue-router2+sass+vue-i18n + 移动端适配(flexible.js) + UI框架(mint UI)


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