# 表格

表格是响应式，兼容移动端，可点击列子，F12-手机模式查看效果
[查看在线列子](https://caoshengxiang.github.io/comui/#/ui/table)

1. 使用

```html
<com-table></com-table>
```

```js
components: {
   comTable
}
```

2. props

|名称|说明|
|----|----|
|images|图片数组|
|switch|slot分发时，图片相对当前序号相对位置（可为正负，向左滑动一张图为-1,向右滑动一张图为1）|
|btnDisplay|左右按钮显示|
|listDisplay|列表显示|
|interval|轮播周期　ms|


3. slot

|名称|说明|
|----|----|
|btn |左右按钮|
|  list |序列小点|

4. event

|名称|说明|
|----|----|
|currentLocal |当前所在索引|
| imgClick |图片点击|
| leftBtn　|左按钮点击|
| rightBtn　|右按钮点击|
| listClick　|序列点击|