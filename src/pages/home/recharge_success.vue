<template>
    <div>
        <header-m title="账户提现" to="/signin">
            <router-link to="/" slot="right" style="color: #fff;display: flex;align-items: center;justify-content: flex-end">
                <span>提现历史</span>
            </router-link>
        </header-m>
        <div class="suc">
            <div class="suc-1">
                <p>账户: 林妹妹</p>
                <p>成功充值 <span>1313</span>魂币</p>
            </div>
            <div class="suc-2">
                <p>可在 <span>[我的-充值记录]</span>中查看</p>
            </div>

            <div class="suc-3">我知道啦~</div>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    export default {
        name: '',
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
    .suc {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50px;
        bottom: 0;
        background: #26322d url("../../assets/me_img_czcg@2x.2.png") no-repeat;
        background-size: 100% 80%;
        text-align: center;
        .suc-1 {
            margin: 260px auto 0 auto;
            width: px2rem(170px);
            text-align: left;
            p{
                &:nth-child(1) {
                    font-size: px2rem(14px);
                }
                &:nth-child(2) {
                    font-size: px2rem(12px);
                    color: #888;
                }
                span {
                    color: #ff1b6b
                }
            }
        }
        .suc-2 {
            margin: 30px auto 0 auto;
            width: px2rem(170px);
            text-align: left;
            span {
                color: #ff1b6b
            }
        }
        .suc-3 {
            margin: 160px auto;
            background: #ff1b6b;
            width: px2rem(120px);
            padding: px2rem(8px) px2rem(10px) px2rem(10px) px2rem(10px);
            color: #fff;
            font-size: px2rem(16px);
            border-radius: 20px;

        }
    }
</style>