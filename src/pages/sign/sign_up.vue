<template>
    <div>
        <div v-if="promise">
            <mt-header title="声明与承诺">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <!--<mt-button icon="more" slot="right"></mt-button>-->
            </mt-header>
            <div>
                <h3>我声明并承诺</h3>
                <p>
                    1. aaaaaaaaaaa <br>
                    2. bbbbbbbbbbbbbbbbbbbbb <br>
                    3. ccccccccccccccccc ccc cc cccccccccc <br>
                </p>
            </div>
            <mt-button type="danger" size="large" @click="toSignUp">同意并注册</mt-button>
        </div>
        <div v-else>
            <mt-header title="用户注册">
                <span @click="goBack()" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </span>
                <!--<mt-button icon="more" slot="right"></mt-button>-->
            </mt-header>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="form.email"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="form.phone"></mt-field>
            <mt-field label="验证码" placeholder="输入验证码" v-model="form.captcha">
                <mt-button type="default" @click="captcha()">获取</mt-button>
            </mt-field>

            <mt-button type="danger" size="large">注册</mt-button>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'signUp',
        props: {},
        data () {
            return {
                promise: false,
                form: {
                    username: '',
                    password: '',
                    email: '',
                    phone: '',
                    captcha: ''
                }
            }
        },
        computed: {},
        methods: {
            toSignUp () {
                this.promise = false
            },
            captcha () {
                this.$toast('验证码发出,请查收')
            },
            goBack() {
                this.$router.go(-1)
            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
</style>
