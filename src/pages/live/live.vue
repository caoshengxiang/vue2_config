<template>
    <div class="live">
        <div class="item-1">
            <img src="../../assets/home/logo.png" alt="">
            <div class="download">
                <a @click="openNativeApp">已下载铸魂直播APP 》</a>
                <a @click="downloadApp"><img width="20" height="20" src="" alt=""> 下载铸魂直播APP</a>
            </div>
        </div>


        <div class="item-2" id="playBox">
            <!--<video width="100%"  id="living" class="living" controls autoplay preload="auto">
            <source :src="vi" type="video/mp4">

            您的浏览器不支持 video 标签。
        </video>-->


            <video-player   id="video-play"
                            ref="videoPlayer"
                           :options="playerOptions"
                           @play="onPlayerPlay($event)"
                           @playing="onPlayerPlaying($event)"
                           @ended="onPlayerEnded($event)"
                           @ready="playerReadied($event)"
            >不支持
            </video-player>


            <div class="text" v-show="messageShow">

                <div class="bottom">
                    <div class="msg">
                        <span class="list"><span class="name">小智</span> <span class="con">送给主播康乃馨x100</span></span><br>
                        <span class="list"><span class="name">小智</span> <span class="con">送给主播康乃馨x100</span></span><br>
                        <span class="list"><span class="name">小智</span> <span class="con">送给主播康乃馨x100</span></span><br>
                        <span class="list"><span class="name">小智</span> <span class="con">主播好漂亮，主播好漂亮</span></span><br>
                        <span class="list"><span class="name">小智</span> <span class="con">送给主播康乃馨送给主播康乃馨送给主播康乃馨送给主播康乃馨送给主播康乃馨送给主播康乃馨</span></span><br>
                    </div>

                </div>
            </div>
        </div>

        <div class="item-3">
            <div class="user">
                <div class="anchor">
                    <div class="row-1">
                        <img class="head-img" src="../../assets/test-head.jpeg" alt="">
                        <div >
                            <h3>用户名称</h3>
                            <p>直播主题,直播主题,直播主题</p>
                        </div>
                    </div>
                    <div class="row-2">
                        <img width="14px" height="14px" src="" alt=""> 500
                    </div>
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
</template>
<script>
//    import VideoJs from 'video.js'
    import video from '../../assets/VID_20170805_141933.mp4'
    import toast from '../../components/toast/dialog.vue'
    import poster from '../../assets/test-poster.jpg'
    import {platform, iOSOrAndroid, getQueryObj} from '../../utils/utils'
    export default {
        name: 'live',
        props: {},
        data() {
            return {
                dialogShow: false,
                messageShow: false,
                vi: video,
                player: '',
                playerOptions: {

                    // component options
                    start: 0,
                    playsinline: false,

                    // videojs options
//                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: video,
//                        src: '',
                    }],
                    autoplay: true,
                    poster: poster,
//                    height: screen.height,
                    height: 337,
                    width: 375,
                    controls: false,
                    live: true,
                }
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
                this.playerOptions.sources[0].src= ''
            },
            playerReadied() { // ready
//                console.log(screen.availHeight, screen.height)
            },
            openNativeApp() {
//                alert('open')

                // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
                // 否则打开a标签的href链接
                let ifr = document.createElement('iframe');

                ifr.src = 'weixin://';
                ifr.style.display = 'none';
                document.body.appendChild(ifr);
                window.setTimeout(function(){
                    document.body.removeChild(ifr);
                },3000)
            },
            downloadApp() {
                if (platform() === 'Android') {
                    window.location.href = 'https://downpack.baidu.com/baidutieba_AndroidPhone_v8.7.8.2(8.7.8.2)_1019960r.apk?src=webtbGF'
                } else {
                    window.location.href ='https://itunes.apple.com/cn/app/id477927812'
                }
//                window.location.href =
            },
        },
        components: {
            toast,
        },
        beforeCreate() {
//            console.info(window.location)
            console.log(getQueryObj().userid) // 参数解析
        },
        created() {
//            this.dialogShow = true


        },
        beforeMount() {

        },
        mounted() {
//            let play = VideoJs('living');

            /*this.player.on('ready', function() {
                console.log(1)
            });*/

//            console.log($('#playBox').outerHeight())
            this.playerOptions.height = $('#playBox').outerHeight() // eslint-disable-line
            this.playerOptions.width = $('#playBox').outerWidth() // eslint-disable-line
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
    .live {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        overflow: hidden;
    }
    .living {
    }
    .item-1 {
        position: relative;
        height: 17%;
        overflow: hidden;
        display: flex;
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
                    background-color: rgba(0,0,0, 0.4);
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
    .download {

        width: 100%;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: px2rem(10px) auto;
            width: 80%;
            padding: px2rem(8px);
            border-radius: px2rem(20px);
            height: px2rem(18px);
            font-size: px2rem(16px);
            &:nth-child(1) {
                background-color: #eee;
                border: 1px solid #ccc;
                color: #000;
            }
            &:nth-child(2) {
                background-color: #f53c3c;
                color: #fff;
                img {
                    margin-right: px2rem(10px);
                }
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