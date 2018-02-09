<!--
视频播放器

1. props
videoSrc todo 视频地址
poster todo 封面
controls todo 原生控制栏

2. slot

3. event
mark todo 点击标注（返回播放时间）

4. 问题
todo 初始时出现了播放和加载中同时出现的问题（初次加载视频等待时间长时）
todo 时间条选择选择播放
todo 声音条样式
todo 添加视频end事件的样式

-->

<template>
    <!--播放器-->
    <div>
        <!--播放器-->
        <div class="play-src">
            播放地址:
            <textarea type="text" placeholder="视频地址" v-model="videoSrc"></textarea>
            <button @click="playSrc">播放</button>
        </div>
        <div id="playBox" :class="{'full-screen': isFullScreen}">
            <video :id="vId"
                   @canplay="vCanplay"
                   @play="handlePlay"
                   @playing="handlePlaying"
                   @pause="handlepause"
                   @waiting="handleWaiting"
                   @click="vExitFullScreen">
                <source :src="videoSrc">
                您的浏览器版本太低,请及时更新
            </video>
            <!--<div v-if="barShow" class="control-bar">
                <button @click="vPlay">播放</button>
                <button @click="vPause">暂停</button>
                &lt;!&ndash;<button @click="vBig">全屏</button>
                <button @click="vSmall">退出全屏</button>&ndash;&gt;
                <button @click="vLoad">重载</button>
                <button @click="speed(0.5)">慢放</button>
                <button @click="speed(1)">速度x1</button>
                <button @click="speed(2)">速度x2</button>
                <button @click="speed(3)">速度x3</button>
                <button @click="vFullScreen">全屏2</button>
                <button @click="vExitFullScreen">退出全屏2</button>
                <span>进度条:</span>
                <progress :value="currentTime" :max="duration" id="pro"></progress>
                <span>音量:</span>
                <input type="range" min="0" max="100" v-model="volumeValue" @change="setVolume" id="ran"/>
                <button @click="vFullScreen3">全屏3</button>
                <button @click="vExitFullScreen3">退出全屏3</button>
            </div>-->
            <div v-if="barShow" class="control-bar">
                <div class="l">
                    <span>
                        <i style="transform: scale(0.8)" v-if="!isPlaying" class="icon play-white-32" @click="vPlay"></i>
                        <i style="transform: scale(0.8)" v-if="isPlaying" class="icon pause-white-32" @click="vPause"></i>
                    </span>

                    <span>
                        <i style="transform: scale(0.88)" @click="forwardTime(-5)" class="icon rewind-white-32"></i>
                        <i style="transform: scale(0.8)" @click="forwardTime(5)" class="icon forward-white-32"></i>
                    </span>
                    <span  style="position: relative;bottom: 3px;font-size: 12px;">
                        <div>
                            <span>{{currentFormatTime}}</span>/<span>{{durationFormatTime}}</span>
                        </div>
                    </span>
                </div>
                <div class="r">
                    <span>
                        <i style="transform: scale(0.8)" v-if="!isMuted" @click="setMuted(true)" class="icon volume-white-32"></i>
                        <i style="transform: scale(0.7)" v-if="isMuted" @click="setMuted(false)" class="icon mute-white-32"></i>
                    </span>
                    <span>
                        <input type="range" min="0" max="100" v-model="volumeValue" @change="setVolume"/>
                    </span>
                    <span  style="position: relative;bottom: 3px;font-size: 12px;">
                        <a @click="currentTimeFlag">标注</a>
                    </span>
                    <span class="speed-b"  style="position: relative;bottom: 3px;font-size: 12px;">
                        <a @click="showSpeed = !showSpeed">速度</a>
                        <div
                                class="speed-b-set"
                                :class="{'speed-b-set-s': showSpeed}"
                        >
                            <ul>
                                <li @click="speed(0.5)">0.5X</li>
                                <li @click="speed(1)">1X</li>
                                <li @click="speed(1.2)">1.2X</li>
                                <li @click="speed(1.5)">1.5X</li>
                                <li @click="speed(2)">2X</li>
                                <li @click="speed(3)">3X</li>
                            </ul>
                        </div>
                    </span>
                    <span>
                        <i v-if="!isFullScreen" class="icon full-white-32" @click="vFullScreen3"></i>
                        <i style="transform: scale(0.8)" v-if="isFullScreen" class="icon exitFull2-white-32" @click="vExitFullScreen3"></i>
                    </span>
                </div>
            </div>
            <div class="play-inter">
                <i v-if="!isPlaying" @click="vPlay" class="icon play2-blue-64"></i>
                <div v-if="isLoading" class="loader loader-1">
                    <div class="loader-outter"></div>
                    <div class="loader-inner"></div>
                </div>
            </div>
            <div class="play-time">
                <progress style="height: 4px;width: 100%;" :value="currentTime" :max="duration"></progress>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'video',
        data() {
            return {
                vId: 'player',
                videoDom: '',
                barShow: false,
                volumeValue: 50,
                duration: 0,
                currentTime: 0,
                timer: '',
                isFullScreen: false,
                videoSrc: '/data2/video/567290761/ba857497bf5a3ad503c0fedd1aeb58c0/567290761.mp4',
                // videoSrc: 'http://musicdata.baidu.com/data2/video/567290761/ba857497bf5a3ad503c0fedd1aeb58c0/567290761.mp4',
                videoSrc3: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                isPlaying: false, // 正在播放
                isMuted: false, // 静音
                showSpeed: false, // 展示播放速度bar
                isLoading: false, // 加载中
                durationFormatTime: '00:00:00', // 格式化后的总时间hh:mm:ss
                currentFormatTime: '00:00:00',
            }
        },
        watch: {
            currentTime (d) {
                this.currentFormatTime = this.formatTime(d)
            }
        },
        methods: {
            vCanplay () {
                this.videoDom = document.getElementById(this.vId)
                this.barShow = true
                console.log(this.videoDom.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"'))
                this.duration = this.videoDom.duration // todo 可能在流视频动态获取总时间
                this.durationFormatTime = this.formatTime(this.duration) // todo 同
            },
            handlePlay () {
                this.intervalTime()
            },
            handlepause () {
                clearInterval(this.timer)
            },
            handlePlaying () {
                this.isPlaying = true
                this.isLoading = false
            },
            handleWaiting () {
                this.isLoading = true
            },
            vPlay () {
                this.videoDom.play()
                // this.isPlaying = true
            },
            vPause () {
                this.videoDom.pause()
                this.isPlaying = false
            },
            vSmall () {
                this.videoDom.height = this.videoDom.videoHeight
            },
            vBig () {
                alert(this.videoDom.currentTime)
                alert(this.videoDom.videoHeight)
                this.videoDom.height = this.videoDom.videoHeight * 2
            },
            vLoad () {
                this.videoDom.load()
            },
            speed (n) {
                this.videoDom.playbackRate = n
                this.showSpeed = false
            },
            vExitFullScreen () {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.mozExitFullScreen) {
                    document.mozExitFullScreen()
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen()
                }
            },
            vFullScreen () {
                let element = this.videoDom

                if (element.requestFullscreen) {
                    element.requestFullscreen()
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen()
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen()
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen()
                }
            },
            vExitFullScreen3 () { // 退出全屏
                this.isFullScreen = false
            },
            vFullScreen3 () { // 全屏
                this.isFullScreen = true
            },
            getStyle (el, name) {
                if (window.getComputedStyle) {
                    return window.getComputedStyle(el, null)[name]
                } else {
                    return el.currentStyle[name]
                }
            },
            setVolume () { // 设置声音
                this.videoDom.volume = this.volumeValue / 100
            },
            intervalTime () { // 周期获取当前播放时间
                this.timer = setInterval(() => {
                    this.currentTime = this.videoDom.currentTime
                }, 100)
            },
            playSrc () {
                if (this.videoSrc) {
                    this.videoDom.src = this.videoSrc
                } else {
                    this.videoDom.src = this.videoSrc
                }
                this.vPlay()
            },
            currentTimeFlag () { // 当前播放时间
                alert('当前播放时间（s）：'+ this.currentTime)
            },
            setMuted (bl) {
                this.videoDom.muted = bl
                this.isMuted = bl
            },
            forwardTime (t) {
                this.videoDom.currentTime += t
            },
            formatTime (min) {
                // eslint-disable-next-line
                let rg = /^[+-]?\d+(\.\d+)?$|^$|^(\d+|\-){7,}$/

                if (!rg.test(min)) {
                    return '00:00:00'
                }
                let h = parseInt( min / (60 * 60), 10)
                let m = parseInt( (min % (60 * 60))/60, 10)
                let s = parseInt( (min % (60 * 60))%60, 10)
                let hh = h >= 10 ? h : '0'+ h
                let mm = m >= 10 ? m : '0'+ m
                let ss = s >= 10 ? s : '0' + s

                return hh + ':' + mm + ':' +ss
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./loading";
    @import "icon.css";
    #playBox {
        display: flex;
        flex-direction: column;
        position: relative;
        box-shadow: 1px 1px 5px #888888;
        video {
            width: 100%;
        }
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
    /*todo 这里有个问题,父元素有定位,fixed会相对于该定位*/
    .full-screen {
        position: fixed !important;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 99999;
        background-color: #000;
        video {
            width: 100% !important;
            height: 100% !important;
            border: 1px solid
        }
        .control-bar {
            position: absolute;
            bottom: 0;
        }
        .play-inter {
            border: 0;
        }
    }
    .control-bar {
        background-color: #000000;
        width: 100%;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        .l, .r {
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                margin: 0 3px;
            }
        }
    }
    .speed-b { // 播放速度
        position: relative;
        .speed-b-set {
            display: none;
            position: absolute;
            bottom: 30px;
            left: -10px;
            background-color: #000000;
            opacity: 0.3;
            z-index: 2018;
            li {
                padding: 3px 10px;
                cursor: pointer;
                &:hover {
                    color: #2aa198;
                }
            }
        }
        .speed-b-set-s {
            display: block;
        }
    }
    .play-src {
        display: flex;
        margin: 10px 0;
        textarea {
            flex: 1;
        }
    }
    .play-inter {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 48px;
        border: 1px solid #888888;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .play-time {
        width: 100%;
        position: absolute;
        bottom: 45px;
    }
</style>