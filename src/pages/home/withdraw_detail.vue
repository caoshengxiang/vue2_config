<template>
    <div>
        <header-m title="提现记录" to="/signin">

        </header-m>
        <div class="con">
            <div class="item">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">2017-07-21 <span class="status">审核中</span></p>
                    <div class="msg">您有一笔收益兑换到微信账户[<span>用户昵称·微信号</span>] 12.00元的申请</div>
                </div>
            </div><div class="item">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">2017-07-21 <span class="status">审核中</span></p>
                    <div class="msg">您有一笔收益兑换到微信账户[<span>用户昵称·微信号</span>] 12.00元的申请</div>
                </div>
            </div><div class="item">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">2017-07-21 <span class="status">审核中</span></p>
                    <div class="msg">您有一笔收益兑换到微信账户[<span>用户昵称·微信号</span>] 12.00元的申请</div>
                </div>
            </div><div class="item">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">2017-07-21 <span class="status">审核中</span></p>
                    <div class="msg">您有一笔收益兑换到微信账户[<span>用户昵称·微信号</span>] 12.00元的申请</div>
                </div>
            </div><div class="item">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">2017-07-21 <span class="status">审核中</span></p>
                    <div class="msg">您有一笔收益兑换到微信账户[<span>用户昵称·微信号</span>] 12.00元的申请</div>
                </div>
            </div><div class="item">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">2017-07-21 <span class="status">审核中</span></p>
                    <div class="msg">您有一笔收益兑换到微信账户[<span>用户昵称·微信号</span>] 12.00元的申请</div>
                </div>
            </div><div class="item">
                <div class="l">
                    <icon name="circle" style="color: #686868"></icon>
                </div>
                <div class="r">
                    <p class="time">2017-07-21 <span class="status">审核中</span></p>
                    <div class="msg">您有一笔收益兑换到微信账户[<span>用户昵称·微信号</span>] 12.00元的申请</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    export default {
        name: 'detail',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
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