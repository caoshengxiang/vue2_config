<template>
    <div>
        <!--<header-m title="充值记录" to="/recharge">

        </header-m>-->
        <div class="con">
            <!--<div class="item" v-for="(item, i) in rechargeDetail" :key="i">-->
            <div class="item" v-for="(item, i) in rechargeHistory" :key="i">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">{{item.rechargeTime}}</p>
                    <div class="msg">您充值魂币{{item.receiveSoulCurrency}}已到账成功.</div>
                </div>
            </div>
            <!--<div class="item" v-if="rechargeDetail.length <= 0">-->
            <div class="item" v-if="rechargeHistory.length <= 0">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <div class="msg">您还没有充值魂币哦~</div>
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
                'rechargeDetail',
                'rechargeHistory'
            ]),
            user() {
                if (sessionStorage.u) {
                    return JSON.parse(Base64.decode(sessionStorage.u))
                } else {
                    return ''
                }
            },
        },
        methods: {
            ...mapActions([
                'ac_list_reword'
            ])
        },
        components: {
            HeaderM,
        },
        beforeCreate() {
        },
        created() {
            this.ac_list_reword({
                authToken: this.user.authToken || sessionStorage.authToken,
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
        top: 0px;
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
            }
            .msg {
                width: px2rem(260px);
                background: #fff;
                box-sizing: border-box;
                padding: px2rem(10px);
                height: px2rem(60px);
                display: inline-block;
            }
        }
    }
</style>