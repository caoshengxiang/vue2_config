<template>
    <div class="home"  :class="{show: show}">
        <div class="part-1">
            <div class="l">
                <img class="phone" src="../../assets/home/ipad.png" alt="">
            </div>
            <div class="r">
                <div class="text">
                    <h3><span style="color: #e63e3b;">铸魂直播</span> · 移动客户端</h3>
                    <p>传递正能量，弘扬民族魂</p>
                </div>
                <div class="btn">
                    <a :href="iosDownloadUrl"><img class="b-iphone" src="../../assets/home/Button-iphone.png" alt=""></a>
                    <a :href="androidDownloadUrl"><img class="b-an" src="../../assets/home/Button-an.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="part-2">
            <img class="logo" src="../../assets/home/logo.png" alt="">
            <div class="app">铸魂直播APP</div>
        </div>
    </div>
</template>
<script>
    import {platform} from '../../utils/utils'
    import {Indicator} from 'mint-ui';
    import {androidOpen,androidDownloadUrl,iosDownloadUrl} from '../../utils/zhBaseConfig'
    export default {
        name: 'home',
        props: {},
        data() {
            return {
                show: false,
                androidDownloadUrl: androidDownloadUrl,
                iosDownloadUrl: iosDownloadUrl,
            }
        },
        computed: {},
        methods: {
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
        components: {},
        beforeCreate() {
        },
        created() {
            let that = this

            this.jumpPlatform()

            document.onreadystatechange = function () {
                if (document.readyState === "complete") {
                    that.show = true
                    Indicator.close();
                } else {
                    that.show = false
                }
            };
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
    .home {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        &.show {
            display: block;
        }
    }

    .part-1 {
        background: url('../../assets/home/pc-bg.png') 0 0 no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85%;
        .text {
            color: #fff;
            margin-top: px2rem(20px);
            margin-bottom: px2rem(40px);
            h3 {
                font-weight: bold;
                font-size: px2rem(16px);
                margin-bottom: px2rem(6px);
            }
            p {
                font-size: px2rem(12px);
            }
        }
        .btn {
            img {
                width: px2rem(130px);
                margin-right: px2rem(20px);
                cursor: pointer;
                margin-bottom: px2rem(10px);
            }
        }
        .l {
            margin-right: px2rem(30px);
        }
        .phone {
            width: px2rem(300px);
        }
    }
    .part-2 {
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        .app {
            font-size: px2rem(16px);
            margin-left: 20px;
        }
    }
</style>