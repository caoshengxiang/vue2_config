<template>
    <div>
        <header-m title="帐号登录">
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
            <mt-button type="danger" size="large" class="btn" @click="formLogin">立即登录</mt-button>
            <div class="tips"><span v-show="testLogin">手机号或验证码错误</span></div>
        </div>
        <div class="login">
            <div class="text">----第三方登录----</div>
            <div class="connect-btn">
                <a id="qqLoginBtn" class="btn" href="http://mobile.daodezhisheng.cn:8080/api/thirdpartylogin/index?loginType=QQ"><img
                    src="../../assets/qq.png" alt=""></a>
                <a id="wx_connect_btn" class="btn weixin-login" href="http://mobile.daodezhisheng.cn:8080/api/thirdpartylogin/index?loginType=WECHATPUB"><img
                    src="../../assets/weixin.png" alt=""></a>
                <a id="wb_connect_btn" href="http://mobile.daodezhisheng.cn:8080/api/thirdpartylogin/index?loginType=WEIBO"><img
                    src="../../assets/sina0.png" class="sina" alt=""></a>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    import {mapState, mapActions} from 'vuex'
    import {Base64} from 'js-base64'
    import {getQueryObj} from '../../utils/utils'

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
                if (sessionStorage.u) {
                    return JSON.parse(Base64.decode(sessionStorage.u))
                } else {
                    return ''
                }
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
            loginStatus(me) {
                if (me === 'SUCCESS') {
                    let p = sessionStorage.page // withdraw 提现, recharge 申请

                    switch (p) {
                        case 'withdraw':
                            this.$router.push({name: 'withdraw'})
                            break
                        case 'recharge':
                            this.$router.push({name: 'recharge'})
                            break
                        default:
                    }
                } else {
                    this.testLogin = true
                }

            }
        },
        methods: {
            ...mapActions([
                'ac_send_sms',
                'ac_user_login',
                'ac_verifyLogin'
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
            getAuthToken() {
                if (getQueryObj().authToken) {
                    sessionStorage.authToken = getQueryObj().authToken
                    this.ac_verifyLogin({
                        authToken: getQueryObj().authToken
                    })
                }
            }
        },
        components: {
            HeaderM,
        },
        beforeCreate() {
        },
        created() {
            this.getAuthToken()
        },
        beforeMount() {
        },
        mounted() {
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
        text-align: center;
        .text {
            margin-bottom: 10px;
        }
        .connect-btn {
            img {
                width: 50px;
                height: 50px;
                margin: 5px 10px;
                &.sina {
                    width: 57px;
                    height: 57px;
                    position: relative;
                    top: 3.5px;
                }
            }
        }
    }
</style>