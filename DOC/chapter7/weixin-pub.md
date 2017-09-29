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

1. 配置公共号按钮
```json
{
  "button":[
    {
      "type":"click",
      "name":"T006",
      "key":"V1001_TODAY_MUSIC"
    },{
      "type": "click",
      "name": "test",
      "key": "0001"
    },
    {
      "name":"铸魂直播",
      "sub_button":[
        {
          "type":"view",
          "name":"下载APP",
          "url":"http://mobile.daodezhisheng.cn/home"
        },{
          "type":"view",
          "name":"充值",
          "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5361584af99506d9&redirect_uri=http%3A%2F%2Fmobile.daodezhisheng.cn%2Fweixin%2F%23%2Frecharge&response_type=code&scope=snsapi_base&state=1#wechat_redirect"
        },{
          "type":"view",
          "name":"提现",
          "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5361584af99506d9&redirect_uri=http%3A%2F%2Fmobile.daodezhisheng.cn%2Fweixin%2F%23%2Fwithdraw&response_type=code&scope=snsapi_base&state=1#wechat_redirect"
        }
      ]
    }]
}
```
[官方教程](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419316505&token=&lang=zh_CN)
url是配置的借口在redirect_uri回调到我的服务器地址．这时我的回调地址中会返回我一个code，然后解析code,在调用微信借口获取openid，但是这里我获取失败了<font color=red>我记得在文档有个地方用红色字体说明，不能将这些openid这些用户信息存在前端，只能在后台．</font>可能是这个原因我无法请求到．所以只有辛苦一下后端的同事帮我获取．

### 微信开发工具
之前就听说这个工具不好用，所都没用．最后做支付的时候，遇到坑，不得不用

<font color=red>注意：</font>微信开发工具是不能支付的．可是他都没有提示，尽给我挖坑！

### 三方登陆


### 支付

支付这里被坑的不要不要的，支付宝很好调用．微信我也无力吐嘈．
用了一个三方支付Ping++
开发用的时候是测试环境，支付宝会跳转到一个模拟支付的页面，看下图：


[微信公众平台](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432)

[微信开放平台](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&lang=zh_CN)