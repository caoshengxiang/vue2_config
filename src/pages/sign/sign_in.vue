<template>
    <div>
        <header-m title="帐号登陆">
            <router-link to="/" slot="left" style="color: #fff;display: flex;align-items: center;">
                <!--<icon name="chevron-left" scale="1" style="color: #fff"></icon>&nbsp;<span>返回</span>-->
            </router-link>
        </header-m>
        <div class="container">
            <div class="row">
                <input v-model="loginForm.phone" type="number" placeholder="请输入手机号">
                <a v-if="countdown <= 0" @click="sendCode">发送验证码</a>
                <a v-else style="color: #ef4f4f">{{countdown}}秒后重发</a>
            </div>
            <div class="tips"><span v-show="testPhone">手机号码不正确</span></div>
            <div class="row"><input type="number" v-model="loginForm.code" placeholder="请输入验证码"></div>
            <div class="tips"><span v-show="testCode">验证码不正确</span></div>
            <mt-button type="danger" size="large" class="btn" @click="formLogin">立即登陆</mt-button>
            <div class="tips"><span v-show="testLogin">手机号或验证码错误</span></div>
        </div>
        <div class="login">
            <div style="color: #726b6b">三方登陆</div>
            <div class="connect-btn">
                <span id="qqLoginBtn" class="btn">qq登录</span>
                <span id="wx_connect_btn" class="btn weixin-login"><icon name="weixin"
                                                                         style="color: #578034;margin: auto 2px;"></icon><span>微信登录</span></span>
                <div id="wb_connect_btn"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    import {mapState, mapActions} from 'vuex'
    import {Base64} from 'js-base64'

    export default {
        name: 'signIn',
        props: {},
        data() {
            return {
                timer: '',
                countdown: 0,
                loginForm: {
                    phone: '',
                    code: ''
                },
                testPhone: false,
                testCode: false,
                testLogin: false,
            }
        },
        computed: {
            ...mapState([
                'userInfo',
                'loginStatus'
            ]),
            user() {
                return JSON.parse(Base64.decode(sessionStorage.u))
            }
        },
        watch: {
            userInfo(me) {
                if (me.status === 'FAIL') {
                    this.testLogin = true
                } else if (me.status === 'SUCCESS') {
//                    this.$router.go(-1)
                }
            },
            loginStatus() {
                let p = parseInt(this.$route.params.p, 10) // 1 提现, 2 申请

                switch (p) {
                    case 1:
                        this.$router.push({name: 'withdraw'})
                        break
                    case 2:
                        this.$router.push({name: 'recharge'})
                        break
                    default:
                }
            }
        },
        methods: {
            ...mapActions([
                'ac_send_sms',
                'ac_user_login',
            ]),
            sendCode() {
                if (this.loginForm.phone.length !== 11) {
                    this.testPhone = true
                } else {
                    this.testPhone = false
                    this.ac_send_sms({phone: this.loginForm.phone}).then(() => {
                        this.countdown = 60
                        this.timer = setInterval(() => {
                            this.countdown--
                            if (this.countdown <= 0) {
                                clearInterval(this.timer)
                            }
                        }, 1000)
                    })
                }
            },
            formLogin() {
                if (this.loginForm.phone.length !== 11) {
                    this.testPhone = true
                } else if (!this.loginForm.code) {
                    this.testCode = true
                } else {
                    this.testPhone = false
                    this.testCode = false
                    this.ac_user_login({
                        phone: this.loginForm.phone,
                        code: this.loginForm.code
                    })
                }
            },
            qqLogin() {

                QC.Login({
                        //btnId：插入按钮的节点id，必选
                        btnId:"qqLoginBtn",
                        //用户需要确认的scope授权项，可选，默认all
                        scope:"all",
                        //按钮尺寸，可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S]，可选，默认B_S
                        size: "B_M"
                    }, function (reqData){ //登录成功
                        //根据返回数据，更换按钮显示状态方法
                        console.log(reqData); //查看返回数据
                        QC.Login.getMe(function (openId, accessToken) { //获取用户的openId
                            console.log('QQOPENID:'+openId);
                            console.log('accessToken:'+accessToken);
                        });
                    }
                );
//                https://graph.qq.com/oauth/show?which=Login&display=pc&client_id=1106291055&response_type=token&scope=all&redirect_uri=http%3A%2F%2Fqzonestyle.gtimg.cn%2Fqzone%2Fopenapi%2Fredirect-1.0.1.html

                /*eslint-disable*/
//切割字符串转换参数表
                /*$('#qqLoginBtn').click(() => {

                    window.location.href = 'https://graph.qq.com/oauth2.0/authorize?client_id=1106291055&response_type=token&scope=all&redirect_uri=' + encodeURIComponent(window.location.href)
                })*/
                /*eslint-enable*/
            },
            weiboLogin() {
                WB2.anyWhere(function (W) {
                    W.widget.connectButton({
                        id: "wb_connect_btn",
                        type: '3,2',
                        callback: {
                            login: function (o) { //登录后的回调函数
                                alert("login: " + o.screen_name)
                            },
                            logout: function () { //退出后的回调函数
                                alert('logout');
                            }
                        }
                    });
                });
                /*$('#wb_connect_btn').click(()=>{

                })*/
            },
            weixinLogin() {
                /*let obj = new WxLogin({
                    id:"wx_connect_btn",
                    appid: "wx5361584af99506d9",
                    scope: "snsapi_login",
                    redirect_uri: "http://192.168.1.127:8800/#/",
                    state: "",
                    style: "",
                    href: ""
                });*/

                $('#wx_connect_btn').click(() => {
                    window.location.href = 'https://open.weixin.qq.com/connect/qrconnect?appid=wx5361584af99506d9&redirect_uri=' + encodeURIComponent(window.location.href) + '&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect'
                })
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
            background-color: #eae8e8;
            padding: px2rem(10px);
            height: px2rem(28px);
            display: flex;
            align-items: center;
            border-radius: px2rem(5px);
            input {
                flex: 3;
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
        .tips {
            margin-bottom: px2rem(18px);
            color: red;
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
            .btn {
                margin-right: px2rem(10px);
            }
        }
        .weixin-login {
            border: 1px solid #578034;
            display: flex;
            align-items: center;
            color: #fff;
            border-radius: 3px;
            span {
                background-color: #578034;
                padding: 3px 5px;
            }
        }
    }
</style>