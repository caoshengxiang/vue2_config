# css-一行显示,换行,多行显示

## 一、强制换行
* word-break: break-all; 只对英文起作用，以字母作为换行依据。

* word-wrap: break-word; 只对英文起作用，以单词作为换行依据。

* white-space: pre-wrap; 只对中文起作用，强制换行。

## 二、禁止换行
* white-space:nowrap; overflow:hidden; text-overflow:ellipsis;

   white-space:nowrap; 是禁止换行。

   overflow:hidden; 是让多出的内容隐藏起来，否则多出的内容会撑破容器。

   text-overflow:ellipsis; 让多出的内容以省略号...来表达。但是这个属性主要用于IE等浏览器，Opera浏览器用-o-text-overflow:ellipsis; 而Firefox浏览器没有这个功能，多出的内容只能隐藏起来。

## 三.多行显示

```
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
```