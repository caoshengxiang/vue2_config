<!--
视频播放器
实现功能: 播放,暂停,快进快退,播放时间,声音控制,速度,全屏,时间线,定位播放, 缓冲区, 添加部分键盘快捷键

1. props
Src  视频地址
poster  封面
controls todo 原生控制栏

2. slot

3. event
mark todo 点击标注（返回播放时间）

4. 问题
todo 播放加载逻辑需整理， isPlaying为true,isLoading才能为true
todo 声音条样式
todo 时间线鼠标划过的,虚线,时间提示
todo 截图

-->

<template>
  <!--播放器-->
  <div>
    <!--播放器-->
    <div id="playBox" :class="{'full-screen': isFullScreen}">
      <div style="display: flex">
        <div style="width: 50%;box-sizing: border-box">
          <video :id="vId"
                 :poster="poster"
                 @canplay="vCanplay"
                 @play="handlePlay"
                 @playing="handlePlaying"
                 @pause="handlepause"
                 @waiting="handleWaiting"
                 @ended="handleEnded"
          >
            <source :src="src[0]">
            您的浏览器版本太低,请及时更新
          </video>
        </div>
        <div style="width: 50%;box-sizing: border-box">
          <video :id="vId2"
                 :poster="poster"
                 @canplay="vCanplay"
                 @play="handlePlay"
                 @playing="handlePlaying"
                 @pause="handlepause"
                 @waiting="handleWaiting"
                 @ended="handleEnded"
          >
            <source :src="src[1]">
            您的浏览器版本太低,请及时更新
          </video>
        </div>
      </div>
      <div v-if="barShow" class="control-bar">
        <!--靠左-->
        <div class="l">
          <span class="in-block">
            <i style="transform: scale(0.9)" @click="forwardTime(-forwardTimeSeconds)"
               class="icon ic_down_n"></i>
          </span>
          <span class="in-block" style="margin-top: 3px;margin-right: 8px;transform: scale(0.8)">
            <i v-if="!isPlaying" class="icon ic_Play_n"
               @click="vPlay"></i>
            <i v-if="isPlaying" class="icon ic_Play_s"
               @click="vPause"></i>
          </span>
          <span class="in-block">
            <i style="transform: scale(0.9)" @click="forwardTime(forwardTimeSeconds)" class="icon ic_next_n"></i>
          </span>
          <span style="font-size: 12px">
              <span>{{currentFormatTime}}</span>/<span>{{durationFormatTime}}</span>
          </span>
        </div>
        <!--靠右-->
        <div class="r">
          <!--<span>-->
          <!--<i style="transform: scale(0.8)" v-if="!isMuted" @click="setMuted(true)"-->
          <!--class="icon volume-white-32"></i>-->
          <!--<i style="transform: scale(0.7)" v-if="isMuted" @click="setMuted(false)"-->
          <!--class="icon mute-white-32"></i>-->
          <!--</span>-->
          <!--<span>-->
          <!--<input type="range" min="0" max="100" v-model="volumeValue" @change="setVolume"/>-->
          <!--</span>-->
          <!--<span style="position: relative;bottom: 2px;font-size: 12px;">-->
          <!--<a @click="currentTimeFlag">标注</a>-->
          <!--</span>-->

          <span class="speed-b" style="position: relative;bottom: 2px;font-size: 12px;">
                          <a @click="showSpeed = !showSpeed" class="sp-btn">速度</a>
                          <div
                            class="speed-b-set"
                            :class="{'speed-b-set-s': showSpeed}"
                          >
                              <ul>
                                  <li @click="speed(0.5)">0.5X</li>
                                  <li @click="speed(1)">1X</li>
                                <!--<li @click="speed(1.2)">1.2X</li>-->
                                <!--<li @click="speed(1.5)">1.5X</li>-->
                                  <li @click="speed(2)">2X</li>
                                  <li @click="speed(3)">4X</li>
                              </ul>
                          </div>
          </span>
          <span class="in-block">
            <i style="transform: scale(0.8)" v-if="!isFullScreen" class="icon ic_size_n" @click="vFullScreen3"></i>
            <i style="transform: scale(0.8)" v-if="isFullScreen" class="icon ic_size_s"
               @click="vExitFullScreen3"></i>
          </span>
        </div>
        <!---->
      </div>
      <!--loading and play-->
      <!--<div class="play-inter" :class="{paused: !isPlaying}" @click="mousePlay">-->
        <!--<i v-if="!isPlaying" @click="vPlay" class="icon play2-blue-64"></i>-->
        <!--<div v-if="isPlaying && isLoading" class="loader loader-1">-->
          <!--<div class="loader-outter"></div>-->
          <!--<div class="loader-inner"></div>-->
        <!--</div>-->
      <!--</div>-->
      <!--时间线-->
      <div class="play-time" v-if="barShow" @click="handleTimeLine($event)" id="play-time">
        <!--<progress style="height: 4px;width: 100%;" :value="currentTime" :max="duration"></progress>-->
        <div class="play-line">
          <div class="play-buffer" v-for="(b, i) in currentBuffer" :key="i"
               :style="{width: b.width, left: b.left}"></div>
          <div class="play-done" :style="{width: currentTime/duration*100 +'%'}"></div>
          <!--参考线-->
          <!--<div class="reference-line">-->
          <!--<span class="dotted-line"></span>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComVideo',
    data () {
      return {
        vId: 'player',
        vId2: 'player2',
        videoDom: '', // 获取video标签
        videoDom2: '', // 获取video标签
        barShow: true, // 自定义控制条是否显示
        durationFormatTime: '00:00:00', // 格式化后的总时间hh:mm:ss
        currentFormatTime: '00:00:00', // 格式化后的但前播放时间
        isFullScreen: false, // 是否全屏
        volumeValue: 50, // 声音
        duration: 0, // 总时间
        currentTime: 0, // 播放当前时间
        currentBuffer: [], // 缓冲区
        timer: '',
        isPlaying: false, // 正在播放
        isMuted: false, // 静音
        showSpeed: false, // 展示播放速度bar
        isLoading: false, // 加载中
        forwardTimeSeconds: 5, // 快进快退时间单位,5S
      }
    },
    props: {
      src: {
        default: [],
        type: Array,
      },
      poster: {
        default: '',
        type: String,
      },
      changeSrc: {
        default: false,
        type: Boolean,
      },
      jumpTime: {
        default: 0,
        type: Number
      }
    },
    watch: {
      currentTime (d) {
        this.currentFormatTime = this.formatTime(d)
      },
      changeSrc (d) {
        if (d === true) {
          this.vLoad()
          this.vPlay()
        }
      },
      jumpTime (time) {
        if (time < this.duration && time >= 0) {
          this.videoDom.currentTime = time
          this.videoDom2.currentTime = time
          this.currentTime = this.videoDom.currentTime
        }
      }
    },
    methods: {
      videoInit () {
        this.videoDom = document.getElementById(this.vId)
        this.videoDom2 = document.getElementById(this.vId2)
        this.barShow = true
      },
      vCanplay () {
        // console.log(this.videoDom.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"'))
        this.duration = this.videoDom.duration // todo 可能在流视频动态获取总时间,待测
        this.durationFormatTime = this.formatTime(this.duration) // todo 同
      },
      handlePlay () {
        this.intervalTime()
      },
      handlePlaying () {
        this.isPlaying = true
        this.isLoading = false
      },
      handlepause () {
        clearInterval(this.timer)
      },
      handleWaiting () {
        this.isPlaying = true
        this.isLoading = true
      },
      handleEnded () {
        this.vPause()
      },
      vPlay () { // 播放
        this.videoDom.play()
        this.videoDom2.play()
        // this.isPlaying = true
      },
      vPause () { // 暂停
        this.videoDom.pause()
        this.videoDom2.pause()
        this.isPlaying = false
        this.isLoading = false
      },
      vLoad () {
        this.videoDom.load()
        this.videoDom2.load()
      },
      vExitFullScreen3 () { // 退出全屏
        this.isFullScreen = false
      },
      vFullScreen3 () { // 全屏
        this.isFullScreen = true
      },
      // vLoad () {
      //   this.videoDom.load()
      // },
      speed (n) { // 播放速度
        this.videoDom.playbackRate = n
        this.videoDom2.playbackRate = n
        this.showSpeed = false
      },
      setVolume () { // 设置声音
        this.videoDom.volume = this.volumeValue / 100
        this.videoDom2.volume = this.volumeValue / 100
      },
      intervalTime () { // 周期获取当前播放时间
        this.timer = setInterval(() => {
          this.currentTime = this.videoDom.currentTime
          // this.currentBuffer = this.videoDom.buffered.end(0)
          // console.log('缓冲区个数:', this.videoDom.buffered.length)
          /* 处理多个缓冲区 */
          this.currentBuffer.splice(0, this.currentBuffer.length)
          for (let i = 0; i < this.videoDom.buffered.length; i++) {
            this.currentBuffer.push({
              left: this.videoDom.buffered.start(i) / this.duration * 100 + '%',
              width: (this.videoDom.buffered.end(i) - this.videoDom.buffered.start(i)) / this.duration * 100 + '%',
            })
          }
        }, 100)
      },
      currentTimeFlag () { // 当前播放时间
        alert('当前播放时间（s）：' + this.currentTime)
      },
      setMuted (bl) {
        this.videoDom.muted = bl
        this.videoDom2.muted = bl
        this.isMuted = bl
      },
      forwardTime (t) { // 快进快退
        this.videoDom.currentTime += t
        this.videoDom2.currentTime += t
        this.currentTime = this.videoDom.currentTime
      },
      formatTime (min) { // 格式火时间
        // eslint-disable-next-line
        let rg = /^[+-]?\d+(\.\d+)?$|^$|^(\d+|\-){7,}$/

        if (!rg.test(min)) {
          return '00:00:00'
        }
        let h = parseInt(min / (60 * 60), 10)
        let m = parseInt((min % (60 * 60)) / 60, 10)
        let s = parseInt((min % (60 * 60)) % 60, 10)
        let hh = h >= 10 ? h : '0' + h
        let mm = m >= 10 ? m : '0' + m
        let ss = s >= 10 ? s : '0' + s

        return hh + ':' + mm + ':' + ss
      },
      handleTimeLine (e) { // 时间线点击
        this.videoDom.currentTime = e.offsetX / (document.getElementById('play-time').offsetWidth - 2) * this.duration
        this.currentTime = this.videoDom.currentTime
        this.vPlay() // 播放
      },
      mousePlay () {
        if (this.isPlaying) {
          this.vPause()
        } else {
          this.vPlay()
        }
      },
    },
    mounted () {
      let that = this

      this.videoInit()
      document.onkeydown = function (e) {
        switch (e.keyCode) {
          case 37: // 左
            that.forwardTime(-that.forwardTimeSeconds)
            break
          case 39: // 右
            that.forwardTime(that.forwardTimeSeconds)
            break
          case 32: // 空格
            that.mousePlay()
            break
          default:
        }
      }
    },
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
      height: 100%;
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
      padding: 0 10px;
    }
    .play-inter {
      border: 0;
    }
  }

  .control-bar {
    background-color: #202540;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 0 20px;
    .l, .r {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin: 0 3px;
      }
      .in-block {
        display: inline-block;
        width: 30px;
      }
      &.r {
        .in-block {
          text-align: right;
        }
      }
    }
  }

  .speed-b { // 播放速度
    position: relative;
    .sp-btn {
      padding: 4px 16px;
      background-color: #00B356
    }
    .speed-b-set {
      display: none;
      position: absolute;
      bottom: 30px;
      left: -10px;
      background-color: #000000;
      opacity: 0.5;
      z-index: 2018;
      padding: 4px 16px;
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
    &.paused {
      background-color: rgba(0, 0, 0, .4);
    }
  }

  .play-time {
    width: 100%;
    position: absolute;
    bottom: 45px;
    padding: 0 1px;
    .play-line {
      height: 3px;
      width: 100%;
      background-color: #fff;
      position: relative;
      .play-buffer {
        height: 100%;
        background-color: #000;
        opacity: 0.3;
        position: absolute;
        top: 0;
      }
      .play-done {
        height: 100%;
        background-color: #1296DA;
        position: absolute;
        top: 0;
      }
      /*.reference-line { // 参考线*/
      /*height: 100%;*/
      /*width: 100%;*/
      /*position: absolute;*/
      /*.dotted-line {*/
      /*height: 100%;*/
      /*width: 1px;*/
      /*position: absolute;*/
      /*left: 100px;*/
      /*border: 1px dotted #242424;*/
      /*}*/
      /*}*/
      &:hover {
        cursor: pointer;
        transition: all 0.1s;
        height: 10px;
      }
    }
  }

  /*声音条*/
  /*1 去除默认样式*/
  input[type=range] {
    -webkit-appearance: none;
    width: 160px;
    border-radius: 10px; /*这个属性设置使填充进度条时的图形为圆角*/
    position: relative;
    top: -3px;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 5px; /*将轨道设为圆角的*/
    /*box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; !*轨道内置阴影效果*!*/
  }

  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    margin-top: -3px; /*使滑块超出轨道部分的偏移量相等*/
    background: #ffffff;
    border-radius: 50%; /*外观设置为圆形*/
    border: solid 0.125em rgba(205, 224, 230, 0.5); /*设置边框*/
    box-shadow: 0 .125em .125em #3b4547; /*添加底部阴影*/
  }
</style>
