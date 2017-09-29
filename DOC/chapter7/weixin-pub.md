# weixin公众号项目

这个项目比较小的，总共也就6个页面吧．登陆页面，充值页面，充值记录，提现页面，提现记录，官网app下载页面

这个项目也是属于直播项目，后台我提前了Android和Ios一个月做完，所以我来做公众号，为什么要在公众号上来做提现和充值功能．直接在app上充值提现不就完了还这么麻烦到公众号．听说是app端出了什么新的限制不能在app端充值．好吧我对app也是不很了解．

效果图：

随便展示一下界面：

![](assets/withdraw.png)
![](assets/withdraw-history.png)

测试公众号效果

![](assets/pub.png)

### 测试号
开发阶段可以申请一个测试公众号，在上面进行开发，等开发完成之后再移至正式服务号
测试号的申请很简单[文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432)
<font color=#008080>不要妄想微信文档可以通过链接定位到目标文档，好坑的文档</font>

［开始开发］－［接口测试号申请］－ 就可以通过你的微信申请测试号

有appID和appsecret这些信息，配置好服务器URL等就可以开发了，

［开始开发］－［接口在线调试］ - 调试借口会用到测试号的appID和secret

首先你的调用接口获取access_token，才能调用其他借口，配置菜单，路径之内的

然后扫码关注就可以在微信公众号看到了．

注意：安全域名一定要正确，网页授权域名

#### 获取openid


### 微信开发工具

### 三方登陆


### 支付


[微信公众平台](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432)

[微信开放平台](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&lang=zh_CN)