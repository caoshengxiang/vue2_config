<template>
    <div>
        <header-m title="帐号登陆">
            <router-link to="/" slot="left" style="color: #fff;display: flex;align-items: center;">
                <icon name="chevron-left" scale="1" style="color: #fff"></icon>&nbsp;<span>返回</span>
            </router-link>
        </header-m>
        <div class="container">
            <div class="row">
                <input type="text" placeholder="请输入手机号">
                <a v-if="countdown <= 0" @click="sendCode">发送验证码</a>
                <a v-else style="color: #ef4f4f">{{countdown}}秒后重发</a>
            </div>
            <div class="row"><input type="text" placeholder="请输入验证码"></div>
            <mt-button type="danger" size="large" class="btn">立即登陆</mt-button>
        </div>
    </div>
</template>
<script>
    import HeaderM from '../../components/header/header_m.vue'
    export default {
        name: 'signIn',
        props: {},
        data() {
            return {
                timer: '',
                countdown: 0
            }
        },
        computed: {},
        methods: {
            sendCode() {
                this.countdown = 60
                this.timer = setInterval(()=>{
                    this.countdown --
                    if (this.countdown <= 0) {
                        clearInterval(this.timer)
                    }
                }, 1000)
            }
        },
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
    .container {
        padding: px2rem(30px) px2rem(20px);
        .row {
            margin-bottom: px2rem(30px);
            background-color: #eae8e8;
            padding: px2rem(10px);
            height: px2rem(28px);
            display: flex;
            align-items: center;
            border-radius: px2rem(5px);
            input {
                flex: 1;
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
        .btn {
            margin-top: px2rem(50px)
        }
    }
</style>