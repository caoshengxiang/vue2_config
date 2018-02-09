<template>
  <div>
    <!--播放器-->
    <!--<div style="text-align: center;margin: 30px;">-->
      <!--<h3>播放地址:</h3>-->
      <!--<textarea cols="50" rows="8" type="text" placeholder="视频地址" v-model="videoSrc"></textarea>-->
    <!--</div>-->
    <div style="width: 660px;margin: auto">
      <com-video :src="testVideoSrc" @screenshot="captureImage"></com-video>
    </div>
    <div id="cutImg">
      <h3 @click="cutImage">截图输出,点击图片可下载</h3>
      <div id="output" ref="output">

      </div>
    </div>
  </div>
</template>

<script>
  import ComVideo from '../../../components/video/video'
  import testVideoSrc from '../../../assets/video/1.mp4'

  export default {
    name: 'video-play',
    data () {
      return {
        videoSrc: 'http://musicdata.baidu.com/data2/video/567290761/ba857497bf5a3ad503c0fedd1aeb58c0/567290761.mp4',
        // videoSrc: '/data2/video/567290761/ba857497bf5a3ad503c0fedd1aeb58c0/567290761.mp4',
        videoSrc3: 'http://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        testVideoSrc,
        Image: '',
      }
    },
    components: {
      ComVideo,
    },
    methods: {
      captureImage (imgBase64) {
        this.Image = imgBase64

        let IMG = document.createElement("img")
        let ALink = document.createElement('a')

        ALink.href = imgBase64
        ALink.download = '截图'
        IMG.crossOrigin = 'anonymous'
        IMG.src= imgBase64
        ALink.appendChild(IMG)
        this.$refs['output'].appendChild(ALink)
        // document.body.appendChild(canvas)
      },
      cutImage () {
        // document
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>