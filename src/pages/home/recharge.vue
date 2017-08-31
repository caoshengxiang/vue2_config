<template>
    <div class="recharge">
        <!--<header-m title="账户充值" to="/signin">
            <router-link to="/recharge_d" slot="right" style="color: #fff;display: flex;align-items: center;justify-content: flex-end">
                <span>充值历史</span>
            </router-link>
        </header-m>-->
        <router-link to="/recharge_d" slot="right"
                     style="color: #fff;display: flex;align-items: center;justify-content: flex-end;margin-top: 10px;margin-right: 10px">
            <span>充值历史</span>
        </router-link>
        <div class="row own-hb">
            <p class="num">{{totalCurrencyNum}}</p>
            <p class="line"></p>
            <p class="text">当前魂币</p>
        </div>
        <div class="row row-2">
            <img src="../../assets/diamond.png" width="20px" height="20px">
            <p><span class="line"></span><span class="text">立即充值</span><span class="line"></span></p>
        </div>
        <div class="row rec">
            <a :class="{active: isActive[0]}" @click="rechargeNum(0)"><p class="b">42魂币</p>
                <p class="m">¥6.00</p></a>
            <a :class="{active: isActive[1]}" @click="rechargeNum(1)"><p class="b">210魂币</p>
                <p class="m">¥30.00</p></a>
            <a :class="{active: isActive[2]}" @click="rechargeNum(2)"><p class="b">686魂币</p>
                <p class="m">¥98.00</p></a>
            <a :class="{active: isActive[3]}" @click="rechargeNum(3)"><p class="b">2086魂币</p>
                <p class="m">¥298.00</p></a>
            <a :class="{active: isActive[4]}" @click="rechargeNum(4)"><p class="b">4116魂币</p>
                <p class="m">¥588.00</p></a>
            <a :class="{active: isActive[5]}" @click="rechargeNum(5)"><p class="b">11186魂币</p>
                <p class="m">¥1598.00</p></a>
        </div>
        <div class="item">
            <h3>支付方式: </h3>
            <p>
                <a class="weixin" :class="{active: wxActive}" @click="rechargeTypeFun(1)">微信</a>
                <a class="zfb" :class="{active: zfbActive}" @click="rechargeTypeFun(2)">支付宝</a>
            </p>
        </div>
        <div class="row btn">
            <mt-button type="danger" size="large" class="btn" @click.native="rechargeFun">立即充值</mt-button>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    import { Base64 } from 'js-base64'
    import { mapState, mapActions } from 'vuex'
    import pingpp from 'pingpp-js'
    import { getQueryObj } from '../../utils/utils'

    export default {
        name: 'recharge',
        props: {},
        data () {
            return {
                isActive: [true, false, false, false, false, false],
                payType: ['ALIPAY', 'WECHAT_PAY', 'APPLE_PURCHASED_WITHIN'],
                product: ['soulCurrency_6', 'soulCurrency_30', 'soulCurrency_98', 'soulCurrency_298', 'soulCurrency_588', 'soulCurrency_1598'],
                currency: [42, 210, 686, 2086, 4116, 11186],
                rechargeParam: {
                    cancelUrl: 'http://mobile.daodezhisheng.cn/weixin/#/recharge',
                    clientIp: 'http://mobile.daodezhisheng.cn',
                    fromType: 'WECAHT_PUB',
                    openId: "",
                    payType: 'WECHAT_PAY', //微信   ALIPAY 支付宝
                    product: 'soulCurrency_6',
                    successUrl: 'http://mobile.daodezhisheng.cn/weixin/#/recharge_s',
                    userId: ''
                },
                wxActive: true,
                zfbActive: false,
                cur: 42,
            }
        },
        computed: {
            ...mapState([
                'totalCurrency',
            ]),
            user () {
                if (sessionStorage.u) {
                    return JSON.parse(Base64.decode(sessionStorage.u))
                } else {
                    return ''
                }
            },
            totalCurrencyNum () {
                return parseInt(this.user.soulCurrency ? this.user.soulCurrency : 0, 10)
            },
        },
        methods: {
            ...mapActions([
                'ac_consume_total',
                'ac_verifyLogin',
            ]),
            rechargeFun () { // 支付函数
//                alert(0)
                let that = this

//                alert(1) // TODO
                this.rechargeParam.userId = this.user.userId
                this.rechargeParam.openId = sessionStorage.openid || ''

//                alert(JSON.stringify(this.rechargeParam)) // TODO
//                alert(2)
//                alert(JSON.stringify(this.user.authToken || sessionStorage.authToken)) // TODO
                $axios({
                    method: 'post',
                    url: '/api/consume/applyRecharge',
                    headers: {
                        'authToken': this.user.authToken || sessionStorage.authToken,
                        // "Content-Type": "application/json"
                    },
                    data: this.rechargeParam
                }).then((res) => {
//                    alert(3)
//                    alert(JSON.stringify(res))
                    let charge = res.data.data

                    console.log('charge:' + charge)
//                    alert(JSON.stringify(charge)) // TODO
                    localStorage.cur = that.cur
                    pingpp.createPayment(charge, function (result, err) {
                        console.log(result)
                        console.log(err.msg)
                        console.log(err.extra)
                        if (result === 'success') {
                            // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                        } else if (result === 'fail') {
                            // charge 不正确或者微信公众账号支付失败时会在此处返回
                        } else if (result === 'cancel') {
                            // 微信公众账号支付取消支付
                        }
                    })

                    this.ac_verifyLogin({ // TODO 测试一下
                        authToken: this.user.authToken || sessionStorage.authToken
                    })
                })

//                this.$router.push({name: 'rechargeSuccess'}) // 充值成功后跳转路由
            },
            rechargeNum (ind) {
                let tempArr = [false, false, false, false, false, false]

                tempArr[ind] = true
                this.isActive = tempArr
                this.rechargeParam.product = this.product[ind]
                this.cur = this.currency[ind]
            },
            rechargeTypeFun (num) { // 支付方式
                this.initActive()

                switch (num) {
                    case 1: // 微信
                        this.wxActive = true
                        this.rechargeParam.payType = 'WECHAT_PAY'
                        break
                    case 2: // 支付宝
                        this.zfbActive = true
                        this.rechargeParam.payType = 'ALIPAY'
                        break
                    default:
                }
            },
            initActive () {
                this.wxActive = false
                this.zfbActive = false
            },
            jump() {
                if (!sessionStorage.u) {
                    this.$router.push({name: 'signIn', params: {p: 2}})
                    sessionStorage.page = 'recharge'
                }
            }
        },
        components: {
            HeaderM
        },
        beforeCreate () {
        },
        created () {
            /*this.ac_consume_total({
                userId: this.user.userId,
                authToken: this.user.authToken || sessionStorage.authToken
            })
*/
            let code = getQueryObj().code

            if (code) {
                sessionStorage.code = code
                $axios.get('/api/wechatpublicno/getopenid?code=' + code).then((res) => {
                    sessionStorage.openid = res.data.data
                    this.jump()
                })
            } else { // 非微信浏览器测试用，浏览器不能无法获取code将不能支付等
                this.jump()
            }

        },
        beforeMount () {
        },
        mounted () {
        },
        beforeUpdate () {
        },
        updated () {
        },
        beforeDestroy () {
        },
        destroyed () {
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

    .own-hb {
        margin-top: 60px;
        .num {
            color: #ffcc00;
            font-size: 34px;
            font-weight: bold;
        }
        .line {
            height: 1px;
            width: px2rem(100px);
            background: #ffcc00;
            margin: 6px auto;
        }
        .text {
            color: #fff;
        }
    }

    .row-2 {
        margin-top: 40px; // TODO
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
        padding: px2rem(16px) px2rem(20px);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background: #fff;
        margin: 0 px2rem(10px);
        border-radius: 5px;
        a {
            border: 1px solid #ed3838;
            padding: px2rem(3px) px2rem(15px);
            border-radius: px2rem(20px);
            text-align: center;
            width: 70px;
            overflow: hidden;
            margin: px2rem(10) 0;
            text-decoration: none;

            &.active {
                background: #ed3838;
                .b {
                    color: #fff;
                }
                .m {
                    color: #fff;
                }
            }
        }
        .b {
            color: #ed3838;
        }
        .m {
            color: #888;
        }
    }

    .item {
        padding: px2rem(20px) px2rem(10px) px2rem(10px) px2rem(10px);
        &:nth-child(1) {
            margin-bottom: px2rem(20px);
        }
        a {
            border: 1px solid #ed4e4d;
            padding: px2rem(5px);
            width: px2rem(80px);
            display: inline-block;
            text-align: center;
            border-radius: 5px;
            margin-right: px2rem(10px);
            color: #ed4e4d;
            text-decoration: none;
            &.active {
                background: #ed3838;
                color: #fff;
            }
        }
        h3 {
            font-size: px2rem(14px);
            margin-bottom: px2rem(8px);
            display: inline-block;
            color: #fff;
            margin-right: px2rem(5px);
        }
        p {
            display: inline-block;
        }
    }

    .btn {
        margin-top: 0px;
    }
</style>