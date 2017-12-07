<!--
  布局容器
  使用flex不布局

  1.　prop
  headerStyle
asideStyle
footerStyle

  2. slot
    header
    aside
    main
    mainTop 高度默认是内容高度
    mainBottom 高度默认是内容高度
    footer

  3. event


  // todo 考虑默认宽高为0还是固定宽高，更具后期项目看那个更合适
-->


<template>
  <div class="container">
    <div :style="headerStyle">
      <slot name="header"></slot>
    </div>
    <div class="box" style="">
      <div class="aside" :style="asideStyle">
        <slot name="aside"></slot>
      </div>
      <div style="" class="main">
        <div class="top">
          <slot name="mainTop"></slot>
        </div>
        <div class="ma">
          <slot name="main"></slot>
        </div>
        <div class="bottom">
          <slot name="mainBottom"></slot>
        </div>
      </div>
    </div>
    <div class="footer" :style="footerStyle">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    props: {
      headerStyle: {
        type: Object,
        default () {
          return {
            height: '80px',
          }
        },
      },
      asideStyle: {
        type: Object,
        default () {
          return {
            width: '200px',
          }
        },
      },
      footerStyle: {
        type: Object,
        default () {
          return {
            height: '80px',
          }
        },
      },
    },
    data () {
      return {}
    },
    computed: {},
    methods: {},
    components: {},
    beforeCreate () {
    },
    created () {
    },
    beforeMount () {
    },
    mounted () {
    },
    beforeUpdate () {
    },
    updated () {
    },
    beforeDestroy () {
    },
    destroyed () {
    },
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .box {
    flex: 1;
    display: flex;
    align-items: stretch;
    height: 100%;
    overflow: hidden;
    .aside {
      overflow: hidden;
    }
    .main {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .top {

      }
      .ma {
        flex: 1;
      }
      .bottom {

      }
    }
  }

  .footer {
    overflow: hidden;
  }
</style>