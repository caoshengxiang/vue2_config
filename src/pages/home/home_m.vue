<template>
    <div class="home" id="home" :class="{show: show}">
        <div class="part-1">
            <div>
                <div class="text">
                    <h3><span style="color: #e63e3b;">铸魂直播</span> · 移动客户端</h3>
                    <p>传递正能量&nbsp;&nbsp;弘扬民族魂</p>
                </div>
            </div>

            <img class="phone" src="../../assets/home/anchor.png" alt="" style="opacity: 0.8">

            <div class="btn">
                <!--<a href="/"><img src="../../assets/home/iphone-logo.png" alt="">APP Store</a>
                <a href="/"><img src="../../assets/home/android-logo.png" alt="">Android</a>-->
                <div class="b">
                    <a @click="download('i')"><img src="../../assets/home/ios-store.png" alt=""></a>
                    <a @click="download('a')"><img src="../../assets/home/an-store.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {platform, isWeiXin} from '../../utils/utils'
    import {Indicator} from 'mint-ui';
    import {androidOpen, androidDownloadUrl, iosDownloadUrl} from '../../utils/zhBaseConfig'

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
            },
            download(plat) {
                if (isWeiXin()) {
                    alert('请在右上角选择浏览器打开并下载')
                    return
                }
                if (plat === 'i') {
                    location.href = iosDownloadUrl
                } else {
                    location.href = androidDownloadUrl
                }


            },
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
            bottom: 0px;
            top: 0px;
            width: 100%;
            padding-bottom: 10px;
            padding-top: 10px;
            text-align: center;
            /*background-color: rgba(140, 140, 140, 0.3);*/
            /* Firefox 3.6+ */
            /*background: -moz-linear-gradient(left, #ace, #f96, #ace, #f96, #ace);*/
            /* Safari 4-5, Chrome 1-9 */
            /*background: -webkit-gradient(linear, left top, right top, from(#ace), color-stop(0.25, #f96), color-stop(0.5, #ace), color-stop(0.75, #f96), to(#ace));*/
            /* Safari 5.1+, Chrome 10+ */
            background: linear-gradient(bottom, rgba(0,0,0,1), rgba(255,255,255,0),rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0));
            /* Opera 11.10+ */
            /*background: -o-linear-gradient(left, #ace, #f96, #ace, #f96, #ace);*/

            .b {
                position: absolute;
                bottom: 10px;
            }
            a {
                &:nth-child(1) {
                    img {
                        margin-bottom: 10px;
                        width: px2rem(326px);
                        /*box-shadow: 5px 5px 30px #fff;*/
                    }
                }
                &:nth-child(2) {
                    img {
                        margin-bottom: 10px;
                        width: px2rem(318px);
                    }
                }
            }
        }
    }
</style>