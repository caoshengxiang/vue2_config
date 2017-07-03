<template>
    <div class="header">
        <div class="header-con">
            <a class="bar-left" href="tel:400678912345"><i class="sprites phone-16"></i> 400678912345</a>
            <span class="bar-right" v-if="!user">
                <a class="sign" @click="signUp">注册</a>
                <a class="sign" @click="signIn">登陆</a>
                <a class="qq-server">
                    <i class="sprites QQ-16"></i>
                    <!--<set-lang></set-lang>-->
                </a>
            </span>
            <span class="bar-right" v-if="user">
                <a class="sign msg-signal" @click="signIn">
                    <i class="sprites QQ-16"></i>
                    <span class="tips dots" v-show="msg"></span>
                </a>
                <a class="sign" @click="signUp"><i class="sprites QQ-16"></i></a>
                <a class=""><i class="sprites QQ-16"></i></a>
            </span>

        </div>

        <!-- 登陆弹框 -->
        <div class="sign-in" v-if="toastId == 1">
            <toast @close_event="closeEvent">
                <div class="toast-title" slot="title">
                    <h1>Cinegear</h1>
                    <p>使用Caiamount直接登陆</p>
                </div>
                <div class="form">
                    <div class="form-item">
                        <input type="text" placeholder="手机"/>
                        <div class="area">中国大陆</div>
                    </div>
                    <div class="form-item"><input type="password" placeholder="密码"/></div>
                    <a class="forget" @click="forgetPW">忘记密码?</a>
                    <button>登陆</button>
                    <div class="no-account">没有账户? &nbsp;<a @click="signUp()">去注册</a></div>
                </div>
            </toast>
        </div>

        <!-- 注册声明弹框 -->
        <div class="promise" v-if="toastId == 2">
            <toast title="声明与承诺" @close_event="closeEvent">
                <div class="promise-con">
                    <div class="text">
                        <h3>我声明并承诺:</h3>
                        <p>1. Gaiamout (盖亚)所有的内容之版权归原作者所有; <br>
                        2. 若未经授权将内容盗取或用作他处,原作者将保留追究侵权者法律责任之权利; <br>
                        3. Gaiamout 奖励原创,请勿上传任何侵犯他人权利或违反相关法律之内容.</p>
                    </div>
                    <div class="sel-career">
                        <select name="" class="sel">
                            <option value="-1">请选择你的职业</option>
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                        </select>
                    </div>
                    <button class="to-sign" @click="toSignIn()">同意并注册</button>
                </div>
            </toast>
        </div>

        <!-- 注册弹框 -->
        <div class="sign-up" v-if="toastId == 3">
            <toast @close_event="closeEvent">
                <div class="toast-title" slot="title">
                    <h1>Cinegear</h1>
                    <p>欢迎加入</p>
                </div>
                <div class="form">
                    <div class="form-item"><input type="text" placeholder="名称"/></div>
                    <div class="form-item"><input type="password" placeholder="密码"/></div>
                    <div class="form-item"><input type="email" placeholder="邮箱"/></div>
                    <div class="form-item">
                        <input type="text" placeholder="手机"/>
                        <div class="area">中国大陆</div>
                    </div>

                    <div class="ve-code">
                        <input type="text" placeholder="短信验证码" class="input-code">
                        <button class="get-code">获取</button>
                    </div>
                    <button class="up-button">注册</button>
                </div>
            </toast>
        </div>

        <!-- 忘记密码弹窗 -->
        <div class="forget-pw" v-if="toastId == 4">
            <toast @close_event="closeEvent">
                <div class="toast-title" slot="title">
                    <h1>Cinegear</h1>
                    <p>欢迎加入</p>
                </div>

                <div class="forget-con">
                    <button>手机验证</button>
                    <button>邮箱验证</button>
                </div>
            </toast>
        </div>
    </div>
</template>
<script>
    import toast from '../toast/toast.vue'
    import setLang from '../set_lang.vue'
    export default {
        name: 'pageHeader',
        props: {},
        data() {
            return {
                user: '',
                msg: '2',
                toastId: 0,
            }
        },
        computed: {},
        methods: {
            signIn () {
                this.toastId = 1;
                this.$store.commit('mut_toast', true);
            },
            signUp () {
                this.toastId = 2;
                this.$store.commit('mut_toast', true);
            },
            toSignIn() {
                this.toastId = 3;
            },
            forgetPW() {
                this.toastId = 4;
            },
            closeEvent() {
                this.toastId = -1;
            }
        },
        components: {
            toast,
            setLang,
        },
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/var";
    @import "../../styles/sprites.css";
    @import "../../styles/fun";
    .header-con {
        background: #3a1515;
        color: #ffffff;
        height: px2rem(50px);
        line-height: px2rem(50px);
        a {
            color: #ffffff;
            font-size: px2rem(16px);
            text-decoration: none;
        }
        .bar-left {
            float: left;
            margin-left: $page-padding;
        }
        .bar-right {
            float: right;
            margin-right: $page-padding;
            a{
                margin-left: px2rem(15px);
            }
        }
        .bar-right:after {
            content: '';
            display: block;
            clear: both;
        }
        .msg-signal {
            position: relative;
            .tips {
                position: absolute;
                top: px2rem(-4px);
                right: px2rem(-4px);

                &.dots {
                    width: px2rem(10px);
                    height: px2rem(10px);
                    display: inline-block;
                    border-radius: 50%;
                    background: red;
                }
            }
        }
    }

    /* 登陆*/
    .sign-in {
        .toast-title {
            background: #726262;
            color: #fff;
            padding: 10px;
        }
        .form {
            .form-item{
                width: 100%;
                padding: px2rem(3px);
                box-sizing: border-box;
                border-radius: 5px;
                border: 1px solid #ccc;
                margin-bottom: px2rem(10px);
                position: relative;
                .area {
                    position: absolute;
                    top: px2rem(8px);
                    right: 0px;
                    border-left: 1px solid #ccc;
                    padding: 3px 8px;
                }
            }
            input{
                width: 100%;
                border: 0;
                padding: px2rem(10px) 0;
            }
            .forget {
                color: #000000;
                text-align: left;
                line-height: px2rem(50px);
                width: 100%;
                display: block;
            }
            button {
                width: 100%;
                padding: px2rem(10px);
                box-sizing: border-box;
                border-radius: 5px;
                border: 1px solid #ccc;
                margin-bottom: px2rem(10px);
                background: #ed4912;
                color: #fff;
            }
            .no-account {
                a {
                    color: aqua;
                }
            }
        }
    }

    /* 声明承诺弹框 */
    .promise {
        .text {
            background: #eee;
            padding: px2rem(20px);
            text-align: left;
            h3 {
                font-weight: bold;
            }
        }
        .sel-career {
            margin: px2rem(16px);
            select {
                padding: px2rem(3px);
                padding-bottom: px2rem(6px);
                background: #fff;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
        }
        .to-sign {
            background: #f44024;
            color: #fff;
            border: 1px solid #ccc;
            padding: px2rem(10px);
            width: 100%;
            box-sizing: border-box;
        }
    }


    /* 注册弹框 */
    .sign-up {
        .toast-title {
            background: #726262;
            color: #fff;
            padding: 10px;
        }
        .form {
            .form-item{
                width: 100%;
                padding: px2rem(3px);
                box-sizing: border-box;
                border-radius: 5px;
                border: 1px solid #ccc;
                margin-bottom: px2rem(10px);
                position: relative;
                .area {
                    position: absolute;
                    top: px2rem(8px);
                    right: 0px;
                    border-left: 1px solid #ccc;
                    padding: 3px 8px;
                }
            }
            input{
                width: 100%;
                border: 0;
                padding: px2rem(10px) 0;
            }
            .ve-code {
                margin: px2rem(20px);
                .input-code {
                    width: px2rem(84px);
                    padding: px2rem(10px);
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    border-radius: 5px;
                }
                .get-code {
                    width: px2rem(84px);
                    padding: px2rem(10px);
                    border: 0;
                    background: #544f4f;
                    box-sizing: border-box;
                    border-radius: 5px;
                    margin-left: px2rem(10px);
                    color: #fff;
                }
            }
            .up-button {
                width: 100%;
                padding: px2rem(10px);
                box-sizing: border-box;
                border-radius: 5px;
                border: 1px solid #ccc;
                margin-bottom: px2rem(10px);
                background: #ed4912;
                color: #fff;
            }
        }
    }

    /*忘记密码弹窗*/
    .forget-pw {
        .toast-title {
            background: #726262;
            color: #fff;
            padding: 10px;
        }
        .forget-con {
            padding: px2rem(20px);
            button {
                width: 100%;
                margin: px2rem(10px) 0;
                background: #00b6ff;
                border: 0;
                padding: px2rem(10px);
                box-sizing: border-box;
                border-radius: 5px;
                color: #fff;
            }
        }
    }
</style>