# 五章 通用组建库

## 写在前面

组建开发主要考虑组建的扩展性，所以组建相对简单．没用对css进行太多扩展，以`slot`分发．具体在使用组建时扩展．*在这里推荐样式写在`slot`分发元素上，由调用该组建的父组建来编译*

但文件组建的使用方式都是相同的，全局注册的组建会有所不同，这里多是单文件组建，做一个统一使用列子，
### 引入组建
```javascript
   import dropdown from '../../../components/dropdown/dropdown_menu.vue'
```

### 组建注册
```javascript
    components: {
       dropdown,
    }
```

### 组建中使用
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

ps:　为了偷懒，就不在每个组建介绍中说明使用方式．<font color=red>没有特殊之处使用方法都在这里</font>


## 组建列表

### [页头组建](header.html)

### [icon 组建](icon.html)

### [弹框](toast.html)

### [下拉菜单](drawdown.html)

### [颜色选择器](color.html)

### [折叠板](collapse.html)

