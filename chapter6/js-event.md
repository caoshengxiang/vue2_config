# js Event事件

## 事件对象(event)
是与特定事件相关且包含有关该事件详细信息的对象
    event.type、
        event.target

## 事件目标(tartet)

是发生的事件或与之相关的对象，window、document和Element对象是最常见的事件目标

## 事件类型(type)

### 鼠标事件

|事件|描述|
|---|---|
|mousedown|鼠标设备按下一个元素的时候触发mousedown事件|
|mouseup|鼠标设备从按下的元素上弹起的时候触发mouseup事件。|
|mousemover|鼠标移动到某元素上的时候触发mousemove事件。|
|mouseout| 鼠标从某元素离开的时候触发mouseout事件。|
|mousemove|鼠标在某元素上移动但未离开的时候触发mousemove事件。|
|mousewheel|当使用滚轮时触发|
|contextmenu|显示菜单时会触发些事件|
|click|鼠标点击元素的时候触发click事件。|
|dblclick|鼠标双击元素的时候触发dblclick事件。|
|detail|对于click事件来讲他指定了是单击还是双击还是三击。|
|altKey、ctrlKey、metakey和shiftKey|组合键当键盘按下这几个按钮时返回 true|

### 键盘事件

|事件|描述|
|---|---|
|keypress|按键按下的时候触发该事件。|
|keydown|按键按下的时候触发该事件，并且在keypress事件之前。件|
|keyup|按键松开的时候触发该事件，在keydown和keypress事件之后。|

### 表单事件

|事件|描述|
|---|---|
|select|文本字段（input, textarea等）的文本被选择的时候触发该事件。|
|change|控件失去input焦点的时候触发该事件（或者值被改变的时候）。|
|submit|表单提交的时候触发该事件。|
|reset|元素获得焦点的时候触发该事件，通常来自鼠标设备或Tab导航。|
|focus|按键按下的时候触发该事件。|
|blur|元素失去焦点的时候触发该事件，通常来自鼠标设备或Tab导航。|

### window事件

|事件|描述|
|---|---|
|load|页面加载完毕（包括内容、图片、frame、object）的时候触发该事件。|
|resize|页面大小改变的时候触发该事件（例如浏览器缩放）。|
|scroll|页面滚动的时候触发该事件。|
|unload|从页面或frame删除所有内容的时候触发该事件（例如离开一个页面）。|

<font color=red>DOMContentLoaded和load的区别：</font>

#### DOM文档加载的步骤为

1. 解析HTML结构。
1. 加载外部脚本和样式表文件。
1. 解析并执行脚本代码。
1. DOM树构建完成。//DOMContentLoaded
1. 加载图片等外部文件。
1. 页面加载完毕。//load

也就是说DOMContentLoaded是在DOM树渲染完成，如果导入的是外部css,js还没完成加载。load是在所有文件加载完成

### h5拖拽事件
#### 重点
|||
|---|---|
|DataTransfer| 对象：退拽对象用来传递的媒介，使用一般为Event.dataTransfer。|
|draggable| 属性：就是标签元素要设置draggable=true，否则不会有效果，例如：|
|Event.preventDefault() 方法|阻止默认的些事件方法等执行。在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。另外，如果是从其他应用软件或是文件中拖东西进来，尤其是图片的时候，默认的动作是显示这个图片或是相关信息，并不是真的执行drop。此时需要用用document的ondragover事件把它直接干掉。|
|Event.effectAllowed 属性|就是拖拽的效果。|

|事件|描述|
|---|---|
|ondragstart|当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上|
|ondragenter|当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上|
|ondragover|拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上|
|ondrop|被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上|
|ondragend|当拖拽完成后触发的事件，此事件作用在被拖曳元素上|

1. 创建一个可拖拽对象，需要设置元素的 draggable 属性为 true。
```html
<img id="dragImg" draggable="true" />
```
2. 给 dragstart 设置一个事件监听器存储拖拽数据。

3. dragenter事件，用来确定放置目标是否接受放置。

```js
<div id="dragTarget"></div>

document.getElementById("dragTarget").addEventListener("dragenter", function(event) {
    // 阻止浏览器默认事件
    event.preventDefault();
}, false);
```

4.　dragover事件，用来确定给用户显示怎样的反馈信息。
```js
document.getElementById("dragTarget").addEventListener("dragover", function(event) {
    // 阻止浏览器默认事件
    event.preventDefault();
}, false);
```

5. 最后是drop事件，允许放置对象。
```js
document.getElementById("dragTarget").addEventListener("drop", function(event) {
    event.preventDefault();
    var data=event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}, false);
```

## 事件注册

addEventListener()：标准模式下，ie8之前

　　attachEvent()：ie8之前

移事件事侦听

　　removeEventListener()

　　removeattchEvent();

### 取消默认事件

preventDefault()：阻止默认事件

<font color=red>return false 与 event.preventDefault()的区别：</font>
在事件处理函数中使用 return false; 相当于同时调用了event.stopPropagation()和event.preventDefault()

### 阻止冒泡事件

```js
if(event.stopPropagation){
　　event.StopPropagation();                  // 非ie
} else {
   event.cancelBubble = true;               // ie
}
```

## javascript　事件模型

事件捕获和事件冒泡、事件流

## 事件代理

事件在冒泡过程中会上传到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理

```html
<div id="box">
    <input type="button" value="按钮" id="btn">
    <input type="button" value="按钮2" id="btn2">
    <input type="button" value="按钮3" id="btn3">
</div>
```

```js
var box = document.getElementById('box');

box.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'input') {
    // some code
  }
});
```