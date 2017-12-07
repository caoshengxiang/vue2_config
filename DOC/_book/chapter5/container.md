# 布局

[查看在线列子](https://caoshengxiang.github.io/comui/#/ui/container)

1. 使用

```html
<h1 class="h1">1.布局容器</h1>
    <div style="width: 600px;height: 400px;margin-bottom: 30px;">
      <container>
        <div slot="header" style="background-color: #0da6fa;width: 100%;height: 100%">标题</div>
        <div slot="aside" style="background-color: #0abc5f;width: 100%;height: 100%">菜单</div>
        <div slot="main" style="background-color: #ccc;width: 100%;height: 100%">content</div>
        <div slot="footer" style="background-color: #B3BFD0;width: 100%;height: 100%">页脚</div>
      </container>
    </div>

    <h1 class="h1">2.布局容器-无标题</h1>
    <div style="width: 600px;height: 400px;margin-bottom: 30px;">
      <container :headerStyle="{height: 0}">
        <div slot="header" style="background-color: #0da6fa;width: 100%;height: 100%">标题</div>
        <div slot="aside" style="background-color: #0abc5f;width: 100%;height: 100%">菜单</div>
        <div slot="main" style="background-color: #ccc;width: 100%;height: 100%">content</div>
        <div slot="footer" style="background-color: #B3BFD0;width: 100%;height: 100%">页脚</div>
      </container>
    </div>

    <h1 class="h1">3.布局容器-无左侧菜单</h1>
    <div style="width: 600px;height: 400px;margin-bottom: 30px;">
      <container :asideStyle="{width: 0}">
        <div slot="header" style="background-color: #0da6fa;width: 100%;height: 100%">标题</div>
        <div slot="aside" style="background-color: #0abc5f;width: 100%;height: 100%">菜单</div>
        <div slot="main" style="background-color: #ccc;width: 100%;height: 100%">content</div>
        <div slot="footer" style="background-color: #B3BFD0;width: 100%;height: 100%">页脚</div>
      </container>
    </div>

    <h1 class="h1">4.布局容器-无页脚</h1>
    <div style="width: 600px;height: 400px;margin-bottom: 30px;">
      <container :footerStyle="{height: 0}">
        <div slot="header" style="background-color: #0da6fa;width: 100%;height: 100%">标题</div>
        <div slot="aside" style="background-color: #0abc5f;width: 100%;height: 100%">菜单</div>
        <div slot="main" style="background-color: #ccc;width: 100%;height: 100%">content</div>
        <div slot="footer" style="background-color: #B3BFD0;width: 100%;height: 100%">页脚</div>
      </container>
    </div>

    <h1 class="h1">5.布局容器-页头页脚在content内</h1>
    <div style="width: 600px;height: 400px;margin-bottom: 30px;">
      <container :headerStyle="{height: 0}" :footerStyle="{height: 0}">
        <div slot="header" style="background-color: #0da6fa;width: 100%;height: 100%">标题</div>
        <div slot="aside" style="background-color: #0abc5f;width: 100%;height: 100%">菜单</div>
        <div slot="main" style="background-color: #ccc;width: 100%;height: 100%">content</div>
        <div slot="footer" style="background-color: #B3BFD0;width: 100%;height: 100%">页脚</div>
        <div slot="mainTop" style="background-color: #0da6fa;width: 100%;height: 80px;">content-标题</div>
        <div slot="mainBottom" style="background-color: #B3BFD0;width: 100%;height: 80px;">content-页脚</div>
      </container>
    </div>
```


2. props

|名称|说明|
|----|----|
|headerStyle|页头样式|
|asideStyle|左侧菜单样式|
|footerStyle|页脚样式|


3. slot

|名称|说明|
|    header |页头|
|    aside| 左侧菜单|
|    main |容器|
|    mainTop |高度默认是内容高度|
|    mainBottom |高度默认是内容高度|
|    footer |页脚|

4. event

|名称|说明|
|----|----|
