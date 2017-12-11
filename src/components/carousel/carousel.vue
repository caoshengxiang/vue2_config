<!--
  图片轮播组件
  基于vue, es6,原理vue的transition和position定位

  1. prop:
  images 图片数组，
  switch　slot分发时，图片相对当前序号相对位置（可为正负，向左滑动一张图为-1,向右滑动一张图为1）
  btnDisplay　左右按钮显示
  listDisplay 列表显示
  interval 轮播周期　ms
  btnSide 左右按钮位置 outside,inside, 默认inside
  listSide 序列位置 outside,inside, 默认inside
  listPosition 序列位置 top,right,bottom,left 默认bottom
  // todo 左右按钮显示及样式，序列的显示及样式

  2. slot
  btn 左右按钮
  list 序列小点
  //　todo 分发switch事件处理未完成

  3. event
 currentLocal 当前所在索引
 imgClick 图片点击
 leftBtn　左按钮点击
 rightBtn　右按钮点击
 listClick　序列点击
-->
<template>
  <div class="carousel">
    <div class="carousel-btn" v-if="btnDisplay">
      <a :class="{
      'l-inside': btnSide === 'inside',
      'l-outside': btnSide === 'outside'
    }" @click="switchLeft"><</a>
      <a :class="{
      'r-inside': btnSide === 'inside',
      'r-outside': btnSide === 'outside'
    }" @click="switchRight">></a>
    </div>

    <div class="carousel-box">
      <transition :name='transitionName'> 　<!--必须设置name,放入其中的元素能够过度-->
        　　　　　　　　<img class="carousel-img" @click="imgClick(imgIndex)" :src='images[imgIndex]' :key='images[imgIndex]'>
        <!--当src改变了，这张图就消失了，满足类似v-if的渲染条件。必须设置key值，因为都是img元素，不设置会只改变图片，不进行切换-->
        　　　　　　
      </transition>
    </div>

    <div v-if="listDisplay"
         class='carousel-list'
         :class="{
          'list-pos-top': listPosition === 'top',
          'list-pos-right': listPosition === 'right',
          'list-pos-bottom': listPosition === 'bottom',
          'list-pos-left': listPosition === 'left',
          'carousel-list-inside': listSide === 'inside',
          'carousel-list-outside': listSide === 'outside',
         }"
    >
      <ul class="ul"

      >  <!--这儿放圆点，并且绑定click，-->
        　　　　
        <li v-for='num in images.length' :style="{color:(num - 1) == imgIndex?'red':'green'}"
            @click='listBtn(num - 1)' class='li'>●
        </li>
        　　
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Carousel',
    props: {
      images: { // 图片数组
        type: Array,
        default () {
          return []
        },
      },
      btnDisplay: { // 左右按钮显示
        type: Boolean,
        default: true,
      },
      listDisplay: { // 序列小点显示
        type: Boolean,
        default: true,
      },
      switch: { // 分发时图片切换序号,
        type: Number,
        default: 0,
      },
      interval: { // 轮播周期 /ms
        type: Number,
        default: 1500,
      },
      btnSide: { // 左右按钮位置，inside,outside
        type: String,
        default: 'inside',
      },
      listPosition: { // 序列位置，left,right,top,bottom;
        type: String,
        default: 'bottom',
      },
      listSide: { // inside,outside
        type: String,
        default: 'inside',
      },
    },
    data () {
      return {
        transitionName: 'tra1', // 图片滑动方向
        imgIndex: 0, // 当前显示图片索引
        timer: '', // 轮播计时器
      }
    },
    computed: {},
    methods: {
      switchImg (index) { // 图片切换
        clearInterval(this.timer) // 清除计时器
        if (index > this.imgIndex) { // 设置切换方向，注意这里是先设置方向，再设置索引
          this.transitionName = 'tra1'
        } else if (index < this.imgIndex) {
          this.transitionName = 'tra2'
        }
        if (index >= 0 && index < this.images.length) { // 设置索引
          this.imgIndex = index
        } else if (index < 0) {
          this.imgIndex = this.images.length - 1
        } else {
          this.imgIndex = 0
        }
        setTimeout(() => { // 重新启动计时器
          this.intervalHandle()
        }, this.interval)
      },
      listBtn (index) {
        this.switchImg(index)
        this.$emit('listClick', this.imgIndex)
      },
      switchLeft () {
        clearInterval(this.timer)
        this.switchImg(this.imgIndex - 1)
        this.$emit('leftBtn', this.imgIndex - 1)
        setTimeout(() => {
          this.intervalHandle()
        }, this.interval)
      },
      switchRight () {
        clearInterval(this.timer)
        this.switchImg(this.imgIndex + 1)
        this.$emit('rightBtn', this.imgIndex + 1)
        setTimeout(() => {
          this.intervalHandle()
        }, this.interval)
      },
      intervalHandle () {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.switchImg(this.imgIndex + 1)
        }, this.interval)
      },
      imgClick (index) {
        this.$emit('imgClick', index)
      },
    },
    created () {
      setTimeout(() => {
        this.intervalHandle()
      }, this.interval)
    },
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .carousel {
    position: relative;
    height: 100%;
    width: 100%;
  }

  /*左右按钮*/
  .carousel-btn {
    display: flex;
    a {
      font-size: 60px;
      font-weight: bold;
      position: absolute;
      z-index: 100;
      top: 40%;
      cursor: pointer;
    }
    .l-inside {
      left: 30px;
    }
    .r-inside {
      right: 30px;
    }
    .l-outside {
      left: -50px;
      color: #000000;
    }
    .r-outside {
      right: -50px;
      color: #000000;
    }
  }

  .carousel-box {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  .carousel-img {
    width: 100%;
    position: absolute; //设置绝对定位
  }

  /*列表位置样式*/
  .carousel-list {
    z-index: 101;
    font-size: 30px;
    position: absolute;
    width: 100%;
    ul {

    }
    li {
      cursor: pointer;
      margin: 0 10px;
    }
  }

  .list-pos-top { // top
    .ul {
      display: flex;
      justify-content: center;
    }
    &.carousel-list-inside {
      top: 20px;
    }

    &.carousel-list-outside {
      margin: 10px;
      top: -50px;
    }
  }

  .list-pos-right { // right

    &.carousel-list-inside {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      top: 0;
      height: 100%;
    }

    &.carousel-list-outside {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      top: 0;
      height: 100%;
      right: -50px;
    }
  }

  .list-pos-bottom {
    .ul {
      display: flex;
      justify-content: center;
    }
    &.carousel-list-inside {
      bottom: 20px;
    }

    &.carousel-list-outside {
      margin: 10px;
    }
  }

  .list-pos-left {
    &.carousel-list-inside {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      top: 0;
      height: 100%;
    }

    &.carousel-list-outside {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      top: 0;
      height: 100%;
      left: -50px;
    }
  }

  /*列表位置样式 end*/

  /*右往左*/
  .tra1-enter {
    opacity: 0;
    left: 100%;
  }

  .tra1-enter-to {
    left: 0;
    transition: all 1s;
    opacity: 1;
  }

  .tra1-leave {
    left: 0;
    opacity: 1;
  }

  .tra1-leave-to {
    left: -100%;
    transition: all 1s;
    opacity: 0;
  }

  /*左往右*/
  .tra2-enter {
    opacity: 0;
    left: -100%;
  }

  .tra2-enter-to {
    left: 0;
    transition: all 1s;
    opacity: 1;
  }

  .tra2-leave {
    left: 0;
    opacity: 1;
  }

  .tra2-leave-to {
    left: 100%;
    transition: all 1s;
    opacity: 0;
  }
</style>
