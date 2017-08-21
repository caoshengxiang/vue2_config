<template>
    <div class="recharge">
        <header-m title="账户充值" to="/signin">

            <router-link to="/recharge_d" slot="right" style="color: #fff;display: flex;align-items: center;justify-content: flex-end">
                <span>充值历史</span>
            </router-link>
        </header-m>
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
            <a class="active"><p class="b">42魂币</p><p class="m">¥6.00</p></a>
            <a><p class="b">210魂币</p><p class="m">¥30.00</p></a>
            <a><p class="b">686魂币</p><p class="m">¥98.00</p></a>
            <a><p class="b">2086魂币</p><p class="m">¥298.00</p></a>
            <a><p class="b">4116魂币</p><p class="m">¥588.00</p></a>
            <a><p class="b">11186魂币</p><p class="m">¥1598.00</p></a>
        </div>
        <div class="row btn">
            <mt-button type="danger" size="large" class="btn">立即充值</mt-button>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    import { Base64 } from 'js-base64'
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'recharge',
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'totalCurrency',
            ]),
            user() {
                return JSON.parse(Base64.decode(sessionStorage.u))
            },
            totalCurrencyNum() {
                return parseInt(this.totalCurrency?this.totalCurrency:0, 10)
            },
        },
        methods: {
            ...mapActions([
                'ac_consume_total',
            ])
        },
        components: {
            HeaderM
        },
        beforeCreate() {
        },
        created() {
            if (!sessionStorage.u) {
                this.$router.push({name: 'signIn', params: {p: 2}})
            }
            this.ac_consume_total({
                userId: this.user.userId,
                authToken: this.user.authToken
            })
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
        background-size: 100% 100%;
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
        margin-top: 60px;
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
            width: px2rem(60px);
            margin: px2rem(10) 0;

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
    .btn {
        margin-top: 20px;
    }
</style>