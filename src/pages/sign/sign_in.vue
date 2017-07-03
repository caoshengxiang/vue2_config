


<template>
    <div class="sign-in">
        <div class="title">
            <h1>Cinegear</h1>
        </div>
        <form action="" class="sign-form">
            <input type="text" placeholder="账户" />
            <input type="password" placeholder="密码" />
            <button>登陆</button>
        </form>
        <div>
            <a href="">忘记密码?</a>
            <a @click="signUp()">注册</a>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'signIn',
        props: {},
        data () {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        computed: {},
        methods: {
            signUp() {
                this.$router.push('sign_up')
            }
        },
        components: {},
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/var";
    @import "../../styles/fun";
    .sign-in {
        padding: $page-padding;

        .title {
            text-align: center;
            font-size: px2rem(36px);
            font-weight: 800;
            padding-top: 25%;
            padding-bottom: 30%;
        }
        .sign-form {
            input {
                width: 100%;
                height: px2rem(30px);
            }
            button {
                width: 100%;
                height: px2rem(30px);
            }
        }
    }
</style>
