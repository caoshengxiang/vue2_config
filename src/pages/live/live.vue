<template>
    <div class="box">
        <div class="live">
            <div class="item-1">
                <img class="logo" src="../../assets/home/logo.png" alt="">
                <div class="download">
                    <!--<a class="a-1" @click="openNativeApp">已下载铸魂直播APP 》</a>-->
                    <a class="a-2 a-2-only" @click="downloadApp"><img width="24" height="24"
                                                                      src="../../assets/icon/download2.png" alt="">
                        下载铸魂直播APP</a>
                </div>
            </div>


            <div class="item-2" id="playBox">

                <video id="play" class="video-js vjs-default-skin" controls preload="auto"
                       :poster="videoInfo.anchorIcon"
                       width="375" height=""
                       data-setup='{}'>
                    <source src="" type="application/x-mpegURL">
                </video>

            </div>

            <div class="item-3">
                <div class="user">
                    <div class="anchor">
                        <div class="row-1">
                            <img class="head-img" :src="videoInfo.anchorIcon" alt="">
                            <div>
                                <h3>{{videoInfo.anchorNickname}}</h3>
                                <p>{{videoInfo.title}}</p>
                            </div>
                        </div>
                        <!--<div class="row-2">
                            <img width="14px" height="14px" src="" alt=""> 500
                        </div>-->
                    </div>
                    <!--<div class="other">
                        <img  class="head-img" src="../../assets/test-head.jpeg" alt="">
                        <img  class="head-img" src="../../assets/test-head.jpeg" alt="">
                        <img  class="head-img" src="../../assets/test-head.jpeg" alt="">
                        <img  class="head-img" src="../../assets/test-head.jpeg" alt="">
                        <img  class="head-img" src="../../assets/test-head.jpeg" alt="">
                        <img  class="head-img" src="../../assets/test-head.jpeg" alt="">
                    </div>-->
                </div>
            </div>

            <toast
                :show="dialogShow"
                title=""
                :lineStyle="{lineH: '0'}"
                :toastShowStyle="{width: '85%', borderRadius: '10px'}"
                @closeToast="closeToast">
                <img slot="icon" @click="closeToast" src="../../assets/icon/close.png">
                <div class="con">
                    <h1>直播结束</h1>
                    <p>如需继续观看更多精彩，请下载app~</p>
                    <div class="toast-download">
                        <div class="p-1"></div>
                        <div class="p-2" @click="downloadApp">
                            立即下载
                        </div>
                    </div>
                </div>
            </toast>
        </div>
    </div>
</template>
<script>
    import toast from '../../components/toast/dialog.vue'
    import {platform, iOSOrAndroid, getQueryObj, isWeiXin} from '../../utils/utils'
    import {videoPlayer} from 'vue-video-player'
    import {androidOpen, androidDownloadUrl, iosDownloadUrl} from '../../utils/zhBaseConfig'

    export default {
        name: 'live',
        props: {},
        data() {
            return {
                dialogShow: false,
                messageShow: false,
                videoInfo: {},
            }
        },
        computed: {},
        methods: {
            closeToast() {
                this.dialogShow = false
            },
            onPlayerPlay() { // 点击播放事件
                this.messageShow = true
//                console.log('start')
            },
            onPlayerPlaying() {
                this.messageShow = true
//                console.log('playing')
            },
            onPlayerEnded() { // 结束
                this.dialogShow = true
//                $('#video-play').hide()
//                this.playerOptions.sources[0].src = ''
            },
            playerReadied() { // ready
//                console.log(screen.availHeight, screen.height)
            },
            openNativeApp() {
//                alert('open')

                // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
                // 否则打开a标签的href链接
                let ifr = document.createElement('iframe');

                ifr.src = androidOpen;
                ifr.style.display = 'none';
                document.body.appendChild(ifr);
                window.setTimeout(function () {
                    document.body.removeChild(ifr);
                }, 3000)
            },
            downloadApp() {
                if (isWeiXin()) {
                    alert('请在右上角选择浏览器打开并下载')
                    return
                }
                if (platform() === 'Android') {
                    window.location.href = androidDownloadUrl
                } else {
                    window.location.href = iosDownloadUrl
                }
//                window.location.href =
            },
        },
        components: {
            toast,
            videoPlayer
        },
        beforeCreate() {
//            console.log(getQueryObj().videoid) // 参数解析
        },
        created() {
//            window.location.href = '/static/live.html'
        },
        beforeMount() {

        },
        mounted() {
            let that = this

//            this.playerOptions.height = $('#playBox').outerHeight() // eslint-disable-line
//            this.playerOptions.width = $('#playBox').outerWidth() // eslint-disable-line

            $('#play').width($('#playBox').outerWidth())
            $('#play').height($('#playBox').outerHeight())

            $axios.get('/api/outside/watch/play', {
                params: {
                    videoId: getQueryObj().videoid
                }
            }).then(res => {
                return res.data
            }).then((d) => {
                this.videoInfo = d.data
//                this.playerOptions.poster = d.data.anchorIcon
                if (!d.data.playUrl) {
                    this.dialogShow = true
                    /*this.playerOptions.sources[0] = {
                        type: "",
                        src: ""
                    }
                    this.playerOptions.poster = d.data.anchorIcon*/
                } else {
                    /*this.playerOptions.sources[0] = {
                        type: "rtmp/flv",
                        src: d.data.playUrl
                    }*/

                    let player = videojs('play')

                    if (/.m3u8/i.test(d.data.playUrl)) {
                        player.src({
                            src: d.data.playUrl,
                            type: 'application/x-mpegURL'
                        })
                    } else {
                        player.src({
                            src: d.data.playUrl,
                            type: 'video/mp4'
                        })
                    }


                    console.log(player)
                }
            })
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

    .box {
        margin: 0 auto;
        width: 100%;
        max-width: 750px;
    }

    .live {
        width: 100%;
        max-width: 750px;
        position: absolute;
        top: 0;
        bottom: 0;
        /*left: calc(50% - 750px/2);*/
        overflow: hidden;
    }

    .living {
    }

    .item-1 {
        position: relative;
        height: 17%;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .item-2 {
        position: relative;
        height: 70%;
        overflow: hidden;
    }

    .item-3 {
        position: relative;
        height: 13%;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    #video-play {
        /*transform: scale(1.4);*/
    }

    .text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .bottom {
            position: absolute;
            bottom: 0;
            width: 100%;
            .msg {
                .list {
                    background-color: rgba(0, 0, 0, 0.4);
                    padding: px2rem(10px) px2rem(10px);
                    margin-bottom: px2rem(10px);
                    border-radius: px2rem(20px);
                    max-width: 80%;
                    display: inline-block;
                    .name {
                        color: #f53c3c;
                        margin-right: px2rem(6px);
                    }
                    .con {
                        color: #fff;
                    }
                }
            }

        }
    }

    .user {
        margin-top: px2rem(10px);
        .anchor {
            color: #fff;
            margin-left: px2rem(10px);
            display: flex;
            .row-1 {
                display: flex;
                align-items: center;
                /*background-color: rgba(0, 0, 0, .5);*/
                padding-right: px2rem(10px);
                border-radius: px2rem(20px);
                min-width: px2rem(200px);
                h3 {
                    font-size: px2rem(14px);
                    font-weight: bold;
                    color: #000000;
                }
                p {
                    font-size: px2rem(12px);
                    color: #888;
                }
            }
            .row-2 {
                display: flex;
                align-items: center;
                margin-left: px2rem(10px);
                margin-top: px2rem(5px);
                background-color: rgba(0, 0, 0, .4);
                border: 1px solid #ccc;
                padding: px2rem(5px) px2rem(14px);
                border-radius: px2rem(20px);
                width: px2rem(50px);
                /*color: #000000;*/
                img {
                    margin-right: px2rem(10px);
                }
            }
        }
        .other {
            text-align: right;
            float: right;
            width: px2rem(230px);
            height: px2rem(40px);
            overflow: hidden;
        }
        &:after {
            content: '';
            display: inline-block;
            clear: both;
        }
        .head-img {
            width: px2rem(40px);
            height: px2rem(40px);
            border-radius: 50%;
            margin-right: px2rem(3px);
        }
    }
    .logo {
        width: px2rem(110px);
        height: px2rem(110px);
    }
    .download {
        width: 100%;
        display: flex;
        align-items: center;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: px2rem(10px) auto;
            width: 80%;
            padding: px2rem(8px);
            border-radius: px2rem(10px);
            height: px2rem(18px);
            font-size: px2rem(16px);
            &.a-1 {
                background-color: #eee;
                border: 1px solid #ccc;
                color: #000;
            }
            &.a-2 {
                background-color: #f53c3c;
                color: #fff;
                img {
                    margin-right: px2rem(10px);
                }
            }
            &.a-2-only {
                padding: px2rem(16px) px2rem(8px);
            }
        }
    }

    .con {
        h1 {
            font-size: px2rem(16px);
            margin: px2rem(10px);
        }
        p {
            color: #a4a6a6;
            margin: px2rem(20px);
            font-size: px2rem(14px);
        }
        .toast-download {
            color: #fff;
            font-size: 0;
            .p-1 {
                background-color: #e64646;
                border-top-left-radius: 100%;
                border-top-right-radius: 100%;
                height: px2rem(30px);
                position: relative;
                top: 1px;
            }
            .p-2 {
                background-color: #e64646;
                padding-bottom: px2rem(30px);
                font-size: px2rem(18px);
            }
        }
    }
</style>