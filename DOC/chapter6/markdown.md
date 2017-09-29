# MarkDown一个神奇的东西

[Markdown 中文版语法说明](http://www.jianshu.com/p/1e402922ee32/)

[创始人 John Gruber 的 Markdown 语法说明](https://daringfireball.net/projects/markdown/syntax)

## Markdown的优点

(直接复制)
* 专注你的文字内容而不是排版样式，安心写作。
* 轻松的导出 HTML、PDF 和本身的 .md 文件。
* 纯文本内容，兼容所有的文本编辑器与字处理软件。
* 随时修改你的文章版本，不必像字处理软件生成若干文件版本导致混乱。
* 可读、直观、学习成本低。


## Markdown语法规则

(这才是重点)

### <font color=#800080>标题</font>

标题是每篇文章都需要也是最常用的格式，在 Markdown 中，如果一段文字被定义为标题，只要在这段文字前加 # 号即可。注意# 后面有个空格
```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题

### <font color=#800080>类表</font>

1. 无序列表　- 或 *

```Markdown
-　列表一
* 列表
* 列表

-　列表二
* 列表
    * 列表
```
-　列表一
* 列表
* 列表

-　列表二
* 列表
    * 列表

2.　有序列表，文字前加1.　2.

```Markdown
1. 有序
2. 有序
3. 有序
```
1. 有序
2. 有序
3. 有序

有些情况不好名１. ２. ３.

都写1，会自动变成1.　2.　3.
```Markdown
1. 有序
1. 有序
    1. 有序
```

1. 有序
1. 有序
    1. 有序

**补充：**

1. 　有序列表无序列表下的子列表在序号前加一个Tab


### <font color=#800080>引用</font>

只需要在文本前加入 > 这种尖括号（大于号）即可
```MarkDown
> 这里是引用
```
> 这里是引用


### <font color=#800080>图片和链接</font>

图片为：\![](){ImgCap}{/ImgCap}

链接为：\[]()

**补充：**

1. 改变图片大小
　方法一：使用img标签
`<img src="./xxx.png" width = "300" height = "200" alt="图片名称" align=center />`

  方法二：使用支持图片大小更改操作的 Mou 编辑器
`![](./pic/pic1_50.png =100x100)`**注意:**  =前有个空格，可以只写宽度。

方法二我在本文使用没有成功，我直接写的Markdown语法，待发现问题

### <font color=#800080>斜体和粗体</font>
用两个 * 包含一段文本就是粗体的语法，用一个 * 包含一段文本就是斜体的语法
```
**粗体**
```
**粗体**

```
*斜体*
```
*斜体*

### <font color=#800080>表格</font>

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


注意：他的对齐方式使用的 `:`


### <font color=#800080>代码</font>

两个 \` 中间代码
```
这是一段代码`let arr = []`
```
这是一段代码`let arr = []`

代码块　在三个之间　\```

\```js
let a = 1
let b = 2
\```

\```后面的js代表代码语言，这里是javascript.加强代码块;下面是效果：

### <font color=#800080>分割线</font>

分割线的语法只需要三个 * 号，例如：

```
***
---
```

***

---

### <font color=#800080>脚注</font>

```
这是一个脚注 [^keyword] 的样例
```
这是一个脚注 [^keyword] 的样例


### <font color=#800080>待办事宜 Todo 列表</font>

-[] 跑步
[x] 看书
[] 看电视


<font color=red>注意：　可能会出现编辑不支持的问题</font>


还有时序图，流程图，公式不常用，给个链接方便万一需要[传送门](http://www.jianshu.com/p/0b257de21eb5)


---
### <font color=#800080>可以在MarkDown中添加html来丰富文本</font>

上中出现图片大小显示使用img标签就是一个例子

```html
    <input />
```
<input />

```html
<select>
    <option value="1"></option>
    <option value="2"></option>
    <option value="3"></option>
</select>
```
<select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>

---

allen

2017.9.27 记


