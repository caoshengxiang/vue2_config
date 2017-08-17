<template>
    <div>
        <header-m title="帐号登陆">
            <router-link to="/" slot="left" style="color: #fff;display: flex;align-items: center;">
                <icon name="chevron-left" scale="1" style="color: #fff"></icon>&nbsp;<span>返回</span>
            </router-link>
        </header-m>
        <div class="container">
            <div class="row">
                <input type="text" placeholder="请输入手机号">
                <a v-if="countdown <= 0" @click="sendCode">发送验证码</a>
                <a v-else style="color: #ef4f4f">{{countdown}}秒后重发</a>
            </div>
            <div class="row"><input type="text" placeholder="请输入验证码"></div>
            <mt-button type="danger" size="large" class="btn">立即登陆</mt-button>
        </div>
        <div class="login">
            <div>三方登陆</div>
            <div class="connect-btn">
                <span id="qqLoginBtn"></span>
                <span id="wb_connect_btn">微博登录按钮</span>
                <span id="wx_connect_btn" class="weixin-login"></span>
            </div>

        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'

    export default {
        name: 'signIn',
        props: {},
        data() {
            return {
                timer: '',
                countdown: 0
            }
        },
        computed: {},
        methods: {
            sendCode() {
                this.countdown = 60
                this.timer = setInterval(() => {
                    this.countdown--
                    if (this.countdown <= 0) {
                        clearInterval(this.timer)
                    }
                }, 1000)
            },
            qqLogin() {
                QC.Login({ // 按默认样式插入QQ登录按钮
                    btnId: "qqLoginBtn", //插入按钮的节点id
                    scope: "all",
//                    size: 'B_S'
                });

                //从页面收集OpenAPI必要的参数。get_user_info不需要输入参数，因此paras中没有参数
                let paras = {};

                //用JS SDK调用OpenAPI
                QC.api("get_user_info", paras)
                //指定接口访问成功的接收函数，s为成功返回Response对象
                    .success(function (s) {
                        //成功回调，通过s.data获取OpenAPI的返回数据
                        console.log(s.data);
                    })
                    //指定接口访问失败的接收函数，f为失败返回Response对象
                    .error(function (f) {
                        //失败回调
                        alert("获取用户信息失败！");
                    })
                    //指定接口完成请求后的接收函数，c为完成请求返回Response对象
                    .complete(function (c) {
                        //完成请求回调
                        alert("获取用户信息完成！");
                    });
            },
            weiboLogin() {
                WB2.anyWhere(function (W) {
                    W.widget.connectButton({
                        id: "wb_connect_btn",
                        type: '3,2',
                        callback: {
                            login: function (o) { //登录后的回调函数
                                console.log(o);
                                thirdparty(null,null,o.avatar_hd, o.name ,3, o.id);//个人方法
                                try{
                                    document.getElementsByClassName('loginout')[0].click();
                                    //页面需求，当前页面登录完成之后，不进行跳转，所以模拟点击事件，让微博账号在当前域中退出。不影响下次登录。（元素为微博动态添加）
                                    //微博没有提供退出方法。下面的logout为另一种开发模式调用。

                                }catch(e){
                                    console.log(e);
                                }
                            },
                            logout: function () { //退出后的回调函数
                            }
                        }
                    });
                });
            },
            weixinLogin() {
                let obj = new WxLogin({
                    id:"wx_connect_btn",
                    appid: "wx5361584af99506d9",
                    scope: "snsapi_userinfo",
                    redirect_uri: "http://192.168.1.127:8800/#/",
                    state: "",
                    style: "",
                    href: ""
                });

            },
        },
        components: {
            HeaderM,
        },
        beforeCreate() {
        },
        created() {

        },
        beforeMount() {
        },
        mounted() {
            this.qqLogin()
            this.weiboLogin()
            this.weixinLogin()
        },
        beforeUpdate() {
        },
        updated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../styles/fun";

    .container {
        padding: px2rem(30px) px2rem(20px);
        .row {
            margin-bottom: px2rem(30px);
            background-color: #eae8e8;
            padding: px2rem(10px);
            height: px2rem(28px);
            display: flex;
            align-items: center;
            border-radius: px2rem(5px);
            input {
                flex: 1;
                border: 0;
                background-color: #eae8e8;
            }
            a {
                flex: 1;
                text-align: right;
                color: #726b6b;
                font-size: px2rem(12px);
                text-decoration: none;
            }
        }
        .btn {
            margin-top: px2rem(50px)
        }
    }
    .login {
        padding: px2rem(20px);
        .connect-btn {
            display: flex;
            align-items: center;
            margin-top: px2rem(10px);
            span {
                margin-right: px2rem(10px);
            }
        }
    }
</style>