<template>
    <div class="home" id="home" :class="{show: show}">
        <div class="part-1">
            <div>
                <div class="text">
                    <h3><span style="color: #e63e3b;">铸魂直播</span> · 移动客户端</h3>
                    <p>传递正能量&nbsp;&nbsp;弘扬民族魂</p>
                </div>
            </div>

            <img class="phone" src="../../assets/home/anchor.png" alt="">

            <div class="btn">
                <a href="/"><img src="../../assets/home/iphone-logo.png" alt="">APP Store</a>
                <a href="/"><img src="../../assets/home/android-logo.png" alt="">Android</a>
            </div>
        </div>
    </div>
</template>
<script>
    import {platform} from '../../utils/utils'
    import {Indicator} from 'mint-ui';

    export default {
        name: 'home',
        props: {},
        data() {
            return {
                show: false
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
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
        },
        created() {
            let that = this

            this.jumpPlatform()

            document.onreadystatechange = function () {
                console.log(document.readyState)
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
        overflow: hidden;
        display: none;
        &.show {
            display: block;
        }
    }

    .part-1 {
        background: url('../../assets/home/m-bg.png') 0 0 no-repeat;
        background-size: 100% 100%;
        text-align: center;
        height: 100%;

        .text {
            color: #fff;
            padding-top: px2rem(20px);
            h3 {
                font-weight: bold;
                font-size: px2rem(16px);
                margin-bottom: px2rem(6px);
            }
            p {
                font-size: px2rem(12px);
                color: #ccc;
            }
        }
        .phone {
            /*width: 90%;*/
            position: relative;
            height: 90%;
        }
        .btn {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            a {
                width: 76%;
                margin: 0 auto px2rem(20px) auto;
                padding: px2rem(10px);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                color: #fff;
                &:nth-child(1) {
                    background-color: black;
                }
                &:nth-child(2) {
                    background-color: #e31c4e;
                    margin-bottom: px2rem(30px);
                }
                img {
                    width: px2rem(20px);
                    margin-right: px2rem(20px);
                    position: relative;
                    top: px2rem(-3px);
                }
            }
        }
    }
</style>