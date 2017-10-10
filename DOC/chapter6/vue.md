# vue.js

## vue拖拽 drag and drop
[这里有个例子](https://codepen.io/Lazyboy/pen/RRgRPb)

我写了一段测试代码：
```html
<a draggable='true'  @dragstart='drag($event)'>qwerwe</a>
<div id="" style="width: 300px; height: 300px;border: 1px solid red;"   @drop='drop($event)'
    @dragEnter="dragenter('enter')"
    @dragleave="dragleave('leave')"
    @dragend="dragEnd('end')"
    @dragover='allowDrop($event)'>
</div>
```
发现只有`dragstart`， `dragleave`， `dragover`只有这三个方法起作用。
`draggable='true'`html5的元素可拖动

## 阻止默认事件
```html
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat">

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
```