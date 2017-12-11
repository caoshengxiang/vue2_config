<!--
    阴影组件

    一. Attributes
        show {Boolean} 默认false,  显示组件
        opacity {Number} 透明度,默认 0.6

        icon {} // todo


    二.Events
       // todo close 关闭事件

    三.slot
        1. todo icon  说明：再无title分发时有效
        2. container和未命名slot。

    四. 组件中存在问题

      内部不提供关闭组件的默认方法,因为prop是单向数据流.(之前有考虑,在定义一个isShow数据,watch监听show,问题在于当父组件数据为改变就不能监听)
-->


<template>
  <div class="com-toast"
       v-show="show"
       transition="toast-scale"
       @touchmove.prevent
       @scroll.prevent>
    <!-- 阴影 -->
    <div class="shadow" :style="{opacity: opacity}"></div>

    <!-- 弹框 -->
    <div class="parent-box">

      <div class="toast-show">
        <slot name="container"></slot>
        <slot></slot>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'Shadow',
    props: {
      show: {
        default: false,
        type: Boolean
      },
      icon: {
        default: '',
        type: String
      },
      opacity: {
        default: 0.6,
        type: Number,
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    watch: {
      show () {
        this.isShow = this.show
      }
    },
    methods: {
      closeToast () {
        this.$emit('closeToast')
      }
    },
    components: {},
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  /*.modal-scale-transition {
    transition: transform
    !*opacity .6s ease;*!
  }

  .modal-scale-enter,
  .modal-scale-leave {
    opacity: 0.6;
  }

  .modal-scale-enter {
    transform: scale(1.1);
  }

  .modal-scale-leave {
    transform: scale(0.8);
  }*/
  .com-toast {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: black;
    z-index: 999;
    .shadow {
      background: rgb(0, 0, 0);
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .parent-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .toast-show {
      color: #fff;
      max-height: 100%;
    }
  }
</style>
