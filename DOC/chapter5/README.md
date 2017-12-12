# 五章 通用组件库

## 写在前面

组件开发主要考虑组件的扩展性，所以组件相对简单．没用对css进行太多扩展，以`slot`分发．具体在使用组件时扩展．*在这里推荐样式写在`slot`分发元素上，由调用该组件的父组件来编译*

但文件组件的使用方式都是相同的，全局注册的组件会有所不同，这里多是单文件组件，做一个统一使用列子，

接口文档每个组件内部都有详细说明，文档中可能存在未更新的问题，以组件内部的注释文档为准
### 引入组件
```javascript
   import dropdown from '../../../components/dropdown/dropdown_menu.vue'
```

### 组件注册
```javascript
    components: {
       dropdown,
    }
```

### 组件中使用
```vue
<dropdown class="set-title">
      <img slot="dropdownLink" src="../../../assets/placeholder.png" width="20" height="20">
      <div slot="menuList">
             <ul>
                    <li @click="delTitleList(tIndex)">删除序列</li>
             </ul>
      </div>
</dropdown>
```
### 全局引入

```js
import comUI from '*/components'

Vue.use(comUI)
```

### 按需载入

```js
import { test } from '*/components'

Vue.use(test)
```

ps:
之前的做法是单个组件挂在全局组件，
```js
import Vue from 'vue'

/* Register component with one of 2 methods */

import Collapse from './collapse.vue'

// globally (in your main .js file)
Vue.component('Collapse', Collapse)
```
出现了弊端，只能单个组件的进行注册，后来借鉴elementUI的方法
```js
import Carousel from './carousel.vue'

Carousel.install = function (Vue) {
  Vue.components(Carousel.name, Carousel)
}
export default Carousel

```

ps:　为了偷懒，就不在每个组件介绍中说明使用方式．<font color=red>没有特殊之处使用方法都在这里</font>


## 组件列表

### [页头组件](header.html)

### [icon 组件](icon.html)

### [弹框](toast.html)

### [下拉菜单](drawdown.html)

### [颜色选择器](color.html)

### [折叠板](collapse.html)

### [轮播组件](carousel.html)

### [表格](table.html)

### [布局](container.html)

