<template>
    <div class="recharge">
        <header-m title="账户提现" to="/signin">

            <router-link to="/" slot="right" style="color: #fff;display: flex;align-items: center;justify-content: flex-end">
                <span>提现历史</span>
            </router-link>
        </header-m>
        <div class="row total">
            <span class="text">总魂豆数</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">1000</span>
        </div>
        <div class="row own-hb">
            <p class="num">888</p>
            <p class="line"></p>
            <p class="text">(11.00元)</p>
        </div>
        <div class="row row-2">
            <img src="../../assets/diamond.png" width="20px" height="20px">
            <p><span class="line"></span><span class="text">兑换信息</span><span class="line"></span></p>
        </div>
        <div class="row rec">
            <div class="item">
                <h3>兑换至</h3>
                <p>
                    <a class="weixin">微信</a>
                    <a class="zfb">支付宝</a>
                </p>
            </div>
            <div class="item">
                <h3>兑换账户</h3>
                <p>
                    <input type="text" placeholder="请输入兑换账户">
                </p>
            </div>
        </div>
        <div class="row btn">
            <mt-button type="danger" size="large" class="btn">立即提现</mt-button>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    export default {
        name: 'withdraw',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {
            HeaderM
        },
        beforeCreate() {
        },
        created() {
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
    .total {
        margin-top: 10px;
        .text {
            color: #eee;
        }
        .num {
            color: #ffcc00
        }
    }
    .own-hb {
        margin-top: 10px;
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
            color: #ffcc00;
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
            }
            h3 {
                font-size: px2rem(14px);
                margin-bottom: px2rem(8px);
            }
            input {
                border: 0;
                height: 30px;
                font-size: px2rem(14px);
            }
        }
    }
    .btn {
        margin-top: 10px;
    }
</style>