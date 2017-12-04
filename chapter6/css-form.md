# css-浏览器表单自动填充

### 以下情况下会自动填充用户和密码信息:

1. 在用户和密码包含在form的情况下，同时包含一个 type="text"和 type="password"元素且不包含readonly和disabled属性，两个元素可以没有name和id属性

2. 在没有form的情况下，同时包含一个 type="text"和 type="password"元素且不包含readonly和disabled属性，且两个元素至少都有name或id属性（但name和id可以是任意值但不能是空或空格）。

## 1.autocomplete='off'
> 部分浏览器支持,google下没效果, on保存，off不保存（也可以随便写）

## 2.onfocus
```
<input type="text" autocomplete = "off">
<input type="text" autocomplete = "off" onfocus="this.type='password'">
```
>在输入帐号时不会自动填充密码，但是数据密码后再去修改账户名，无效了，（表单又变成type="text"和 type="password"，所以会自动填充）

可以在帐号input绑定onfocus事件，（清空密码，改为text）

## 添加隐藏的文本框(测试还是有很多问题)

1. 表单中添加下面代码
```html
<input style="display:none" type="text" name="fakeusernameremembered"/>
<input style="display:none" type="password" name="fakepasswordremembered"/>
```
2. 用户名和密码之间加上一个隐藏的文本框：
```html
<input type="text" name="name">
<input type="hidden">
  <input type="password" name="pass">
```

## 最后的解决方案，
综合上面的方法：
```
<input type="text" placeholder="密码" id="psw1" name="psd" onfocus="this.type='password'"
                 v-model="loginForm.password">
          <input style="display: none" type="text" 　id="psw2" value="••••••" autocomplete="off" placeholder="密码"
                 name="psd">
```
提交时,使用隐藏的密码框提交（type为text,value为点，模拟的密码点），欺骗浏览器保存密码
```
document.querySelector('#psw1').style.display = 'none'
document.querySelector('#psw2').style.display = 'inline-block'
          this.$router.push({name: menuPath[0].group[0].name})
```
>即使出现密码填充，也是与本网站无关的密码

## 去除自动填充背景
```css
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
}
input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
}
```
[chrome浏览器当表单自动填充时，怎么去除浏览器自动添加的默认样式。](https://www.cnblogs.com/wuyinghong/p/4863500.html)