# 轮播组件

[查看在线列子](https://caoshengxiang.github.io/comui/#/ui/carousel)

1. 使用

```html
<div style="margin-left: 200px;margin-bottom: 50px;">
      <h3>默认</h3>
      <div style="width: 800px; height: 400px">
        <carousel :images="images" @imgClick="imgI"></carousel>
      </div>
    </div>
    <div style="margin-left: 200px;margin-bottom: 50px;">
      <h3>左右按钮在两侧,不显示列表</h3>
      <div style="width: 800px; height: 400px">
        <carousel :images="images" :interval="2000" btnSide="outside" :listDisplay="false" @imgClick="imgI"></carousel>
      </div>
    </div>
    <div style="margin-left: 200px;margin-bottom: 50px;">
      <h3>列表在下方,轮播周期１S,无左右按钮</h3>
      <div style="width: 800px; height: 400px">
        <carousel :images="images" listSide="outside" :interval="1000" :btnDisplay="false" @imgClick="imgI"></carousel>
      </div>
    </div>
    <div style="margin-left: 200px;margin-bottom: 50px;">
      <h3>默认</h3>
      <div style="width: 800px; height: 400px">
        <carousel :images="images" :interval="2000" @imgClick="imgI"></carousel>
      </div>
    </div>
    <div style="margin-left: 200px;margin-bottom: 50px;">
      <h3>列表在左侧</h3>
      <div style="width: 800px; height: 400px">
        <carousel :images="images" :interval="2000" listPosition="left" :btnDisplay="false" @imgClick="imgI"></carousel>
      </div>
    </div>

```

```js
data () {
    return {
        images: [
              'http://mpic.tiankong.com/403/871/40387119bd4f65ec01f93fc3b3bae8b1/640.jpg',
              'http://mpic.tiankong.com/b71/8e1/b718e16820c85d7f3356734a82d81e0f/17-0113.jpg',
              'http://mpic.tiankong.com/999/0ec/9990ecbd5f67f413b987934fa73221ab/640.jpg',
              'http://mpic.tiankong.com/e48/4d2/e484d234d68c6d9b891ff639efbe7a29/640.jpg',
              'http://mpic.tiankong.com/cf5/844/cf58442c1d45ecfddbf36d4ac760e21b/640.jpg',
        ],
    }
},
components: {
   carousel
},
methods: {
    imgHandle(index) {
        console.log(index)
    }
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
|btnSide |左右按钮位置 outside,inside, 默认inside|
|listSide |序列位置 outside,inside, 默认inside|
|listPosition |序列位置 top,right,bottom,left 默认bottom|


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