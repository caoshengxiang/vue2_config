<template>
    <div class="home">
        <div class="part-1">
            <div class="l">
                <img class="logo" src="../../assets/home/logo.png" alt="">
                <div  class="text">
                    <h3>铸魂直播APP</h3>
                    <p>传递正能量，弘扬民族魂</p>
                </div>
                <div class="btn">
                    <img class="b-iphone" src="../../assets/home/Button-iphone.png" alt="">
                    <img class="b-an" src="../../assets/home/Button-an.png" alt="">
                </div>
            </div>
            <div class="r">
                <img class="phone" src="../../assets/home/phone.png" alt="">
            </div>
            <img class="living" src="../../assets/home/living.png" alt="">
        </div>
        <div class="part-2">
            下 载 即 代 表 您 同 意&nbsp;&nbsp; <a href="/">铸 魂 用 户 协 议</a>
        </div>
    </div>
</template>
<script>
    import platform from '../../utils/utils'
    export default {
        name: 'home',
        props: {},
        data () {
            return {
                platform: 'home'
            }
        },
        computed: {},
        methods: {
            openMenu() {
                this.menuShow = 'block'
            },
            closeMenu() {
                this.menuShow = 'none'
            },
            jumpPlatform() {
                if (platform() === 'Android' || platform() === 'iPhone') {
                    this.$router.push({name: 'homeMobile'})
                } else if (platform() === 'iPad') {
                    this.$router.push({name: 'homeIpad'})
                } else {
                    this.$router.push({name: 'homePC'})
                }
            }
        },
        components: {

        },
        created() {
            this.platform = platform()
            this.jumpPlatform()
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .home {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
    }
    .part-1 {
        background: url('../../assets/home/pc-bg.png') 0 0  no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
        .logo {
            width: 80px;
        }
        .text {
            color: #fff;
            margin-top: 20px;
            margin-bottom: 40px;
            h3 {
                font-weight: bold;
                font-size: 16px;
                margin-bottom: 6px;
            }
            p {
                font-size: 12px;
            }
        }
        .btn {
            img {
                width: 130px;
                margin-right: 20px;
                cursor: pointer;
            }
        }
        .r {
            height: 80%;
        }
        .phone {
            height: 100%;
        }
        .living {
            position: absolute;
            top: 0;
            right: 100px;
            width: 36px;
        }
    }
    .part-2 {
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            color: red;
            text-decoration: underline;
        }
    }
</style>
