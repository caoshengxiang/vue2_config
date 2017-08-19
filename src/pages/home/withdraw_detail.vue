<template>
    <div>
        <header-m title="提现记录" to="/withdraw">

        </header-m>
        <div class="con">
            <div class="item" v-for="(item, index) in withdrawDetail" :key="index">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">{{item.applyTime}}
                        <span class="status" v-if="item.applyStatus === 'NONE'">申请中</span>
                        <span class="status" v-if="item.applyStatus === 'PASS'">同意</span>
                        <span class="status" v-if="item.applyStatus === 'REJECT'">拒绝</span>
                        <span class="status" v-if="item.applyStatus === 'DONE'">完成提现</span>
                    </p>
                    <div class="msg">您有一笔收益兑换到
                        <span v-if="item.accountType === 'ALIPAY'">支付宝</span>
                        <span v-if="item.accountType === 'WECHAT'">微信</span>
                        账户[<span>{{item.userNickname}}&nbsp;·&nbsp;{{item.account}}
                    </span>] {{item.money}}元的申请</div>
                </div>
            </div>
            <div class="item" v-if="withdrawDetail.length <= 0">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <div class="msg">
                        您还没有兑换过魂币哦~
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    import { Base64 } from 'js-base64'
    import {mapState, mapActions} from 'vuex'
    export default {
        name: 'detail',
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapState([
                'withdrawDetail'
            ]),
            user() {
                return JSON.parse(Base64.decode(sessionStorage.u))
            },
        },
        methods: {
            ...mapActions([
                'ac_list_withdraw'
            ])
        },
        components: {
            HeaderM,
        },
        beforeCreate() {
        },
        created() {
            this.ac_list_withdraw({
                authToken: this.user.authToken,
                data: {
                    pageIndex: 1,
                    pageSize: 10000,
                    userId: this.user.userId
                }
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
    .con {
        padding: px2rem(20px);
        background: #eee;
        position: absolute;
        top: 50px;
        bottom: 0;
        width: 100%;
        overflow: scroll;
    }
    .item {
        display: flex;
        margin-bottom: 30px;
        .l {
            margin-right: px2rem(10px);
        }
        .r {
            color: #686868;
            .time {
                margin-left: px2rem(10px);
                margin-bottom: px2rem(10px);
                .status {
                    float: right;
                }
            }
            .msg {
                width: px2rem(260px);
                background: #fff;
                box-sizing: border-box;
                padding: px2rem(10px);
                height: px2rem(60px);
                display: inline-block;
                span {
                    color: #ff1b6b;
                }
            }
        }
    }
</style>