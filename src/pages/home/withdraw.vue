<template>
    <div class="recharge">
        <!--<header-m title="账户提现" to="/signin">
            <router-link to="/withdraw_d" slot="right" style="color: #fff;display: flex;align-items: center;justify-content: flex-end">
                <span>提现历史</span>
            </router-link>
        </header-m>-->
        <router-link to="/withdraw_d" slot="right" class="detail" style="color: #fff;display: flex;align-items: center;justify-content: flex-end;margin-top: 10px;margin-right: 10px">
            <span>提现历史</span>
        </router-link>
        <div class="row total">
            <span class="text">总魂豆数</span>&nbsp&nbsp<span class="num">{{totalBeansNum}}</span>
        </div>
        <div class="row own-hb">
            <p class="num">
                <input type="number" :placeholder="0" v-model="withdraw.soulBean">
            </p>
            <p class="line"></p>
            <p class="text">({{moneyCpt}}元)</p>
        </div>
        <div class="row row-2">
            <img src="../../assets/diamond.png" width="20px" height="20px">
            <p><span class="line"></span><span class="text">兑换信息</span><span class="line"></span></p>
        </div>
        <div class="row rec">
            <div class="item">
                <h3>兑换至</h3>
                <p>
                    <a class="weixin" :class="{active: wxActive}" @click="wxActiveF">微信</a>
                    <a class="zfb" :class="{active: zfbActive}" @click="zfbActiveF">支付宝</a>
                </p>
            </div>

            <div class="item" v-show="wxActive">
                <h3>兑换账户</h3>
                <p class="tips">
                    微信提现将提现至关注公众号的微信账号
                </p>
            </div>
            <div class="item" v-show="zfbActive">
                <h3>兑换账户</h3>
                <p>
                    <input id="zfbAccount" type="text"
                           placeholder="请务必正确输入支付宝账户"
                           v-model="withdraw.account">
                </p>
            </div>
        </div>
        <div class="row btn">
            <mt-button type="danger" size="large" class="btn" @click="applyWithdraw">立即提现</mt-button>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    import { Base64 } from 'js-base64'
    import {mapState, mapActions} from 'vuex'
    import {getQueryObj} from '../../utils/utils'
    export default {
        name: 'withdraw',
        props: {},
        data() {
            return {
                withdraw: {
                    soulBean: '',
                    account: '',
                    accountType: '',
                    openId: ''
                },
                wxActive: false,
                zfbActive: false,
            }
        },
        computed: {
            ...mapState([
                'totalBeans',
                'isWithdrawSuc'
            ]),
            user() {
                return JSON.parse(Base64.decode(sessionStorage.u))
            },
            totalBeansNum() {
                return parseInt(this.totalBeans?this.totalBeans:0, 10)
            },
            moneyCpt() {
                let TB = parseInt(this.totalBeans?this.totalBeans:0, 10)

                // 1:100
                if (parseInt(this.withdraw.soulBean, 10) > TB) {
                    this.withdraw.soulBean = TB
                }
                return this.withdraw.soulBean/100
            }
        },
        watch: {
            isWithdrawSuc(me) {
                if (me) {
                    alert('提现申请成功,请耐心等待')

                }
            }
        },
        methods: {
            ...mapActions([
                'ac_consume_total',
                'ac_apply_withdraw',
                'ac_verifyLogin',
            ]),
            wxActiveF() {
                this.initActive()
                this.wxActive = true
                this.withdraw.accountType = 'WECHAT'
            },
            zfbActiveF() {
                this.initActive()
                this.zfbActive = true
                this.withdraw.accountType = 'ALIPAY'
                this.$nextTick(()=>{
                    $('#zfbAccount').focus()

                    $('#zfbAccount').blur(()=> {
                        if (!this.withdraw.account) {
                          $('#zfbAccount').css({border: '1px solid red'})
                        } else {
                            $('#zfbAccount').css({border: '0'})
                        }
                    })
                })
            },
            initActive() {
                this.wxActive = false
                this.zfbActive = false
            },
            applyWithdraw() {
                this.withdraw.openId = sessionStorage.openid
                if (this.withdraw.soulBean) { // TODO !
                    alert('请输入提现魂币数量')
                    return
                }
                if (!this.withdraw.accountType) {
                    alert('请选择提现方式')
                    return
                }
                if (this.withdraw.accountType === 'WECHAT') {
                    this.withdrawAction()
                } else if (this.withdraw.accountType === 'ALIPAY') {
                    if (this.withdraw.account) {
                        if (window.confirm('请再次确认支付宝账户信息无误：'+ this.withdraw.account)) {
                            this.withdrawAction()
                        }
                    }
                }

            },
            withdrawAction() {
                this.ac_apply_withdraw({
                    authToken: this.user.authToken,
                    data: Object.assign({}, {userId: this.user.userId}, this.withdraw)
                })
            },
            jump() {
                if (!sessionStorage.u) {
                    this.$router.push({name: 'signIn', params: {p: 1}})
                    sessionStorage.page = 'withdraw'
                }
            }
        },
        components: {
            HeaderM
        },
        beforeCreate() {
        },
        created() {
            let code = getQueryObj().code

            this.ac_consume_total({
                userId: this.user.userId,
                authToken: this.user.authToken
            })
            if (code) {
                sessionStorage.code = code
                $axios.get('/api/wechatpublicno/getopenid?code=' + code).then((res) => {
                    sessionStorage.openid = res.data
                    this.jump()
                })
            } else { // 非微信浏览器测试用，浏览器不能无法获取code将不能支付等
                this.jump()
            }


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
    .recharge {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background-image: url("../../assets/me_img_history@2x.2.png");
        background-size: 100% 110%;
        background-position-y: -10px;
    }
    .row {
        padding: px2rem(10px);
        text-align: center;
    }
    .total {
        margin-top: 10px;
        .text {
            color: #eee;
        }
        .num {
            color: #ffcc00;
        }
    }
    .own-hb {
        margin-top: 10px;
        .num {
            color: #ffcc00;
            font-size: 34px;
            font-weight: bold;
            input {
                width: 100px;height: 24px;background-color: rgba(0,0,0,0);border: 0;
                color: #ffcc00;
                text-align: center;
            }
        }
        .line {
            height: 1px;
            width: px2rem(100px);
            background: #ffcc00;
            margin: 6px auto;
        }
        .text {
            color: #ffcc00;
        }
    }
    .row-2 {
        margin-top: 100px;
        color: #fff;
        p {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .line {
            display: inline-block;
            width: px2rem(110px);
            height: 1px;
            background: #e5e3e3;

        }
        .text {
            font-size: 16px;
            margin: 0 px2rem(5px)
        }
    }
    .rec {
        padding: px2rem(30px) px2rem(20px);
        /*display: flex;
        flex-wrap: wrap;
        justify-content: space-between;*/
        background: #fff;
        margin: 0 px2rem(10px);
        border-radius: 5px;
        text-align: left;
        .item {
            &:nth-child(1) {
                margin-bottom: px2rem(20px);
            }
            a {
                border: 1px solid #119cff;
                padding: px2rem(5px);
                width: px2rem(80px);
                display: inline-block;
                text-align: center;
                border-radius: 5px;
                margin-right: px2rem(10px);
                color: #119cff;
                &.active {
                    border-color: red;
                    color: red;
                }
            }
            h3 {
                font-size: px2rem(14px);
                margin-bottom: px2rem(8px);
            }
            input {
                border: 0;
                height: 30px;
                width: 80%;
                font-size: px2rem(14px);
            }
            .tips {
                color: #888;
            }
        }
    }
    .btn {
        margin-top: 10px;
    }
</style>