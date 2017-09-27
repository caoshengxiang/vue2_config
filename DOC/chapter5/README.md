# 五章 通用组件库

## 写在前面

组件开发主要考虑组件的扩展性，所以组件相对简单．没用对css进行太多扩展，以`slot`分发．具体在使用组件时扩展．*在这里推荐样式写在`slot`分发元素上，由调用该组件的父组件来编译*

但文件组件的使用方式都是相同的，全局注册的组件会有所不同，这里多是单文件组件，做一个统一使用列子，
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

ps:　为了偷懒，就不在每个组件介绍中说明使用方式．<font color=red>没有特殊之处使用方法都在这里</font>


## 组件列表

### [页头组件](header.html)

### [icon 组件](icon.html)

### [弹框](toast.html)

### [下拉菜单](drawdown.html)

### [颜色选择器](color.html)

### [折叠板](collapse.html)

