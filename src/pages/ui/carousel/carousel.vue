<template>
  <div>
<h1 class="h1">轮播图</h1>

    <!--test 轮播组件-->
    <div style="width: 800px; height: 400px">
      <carousel :images="img" :interval="2000" @imgClick="imgI"></carousel>
    </div>
  </div>
</template>
<script>
  import carousel from '../../../components/carousel/carousel.vue'
  import timg1 from '../../../assets/test/c1.jpg'
  import timg2 from '../../../assets/test/c2.jpg'
  import timg3 from '../../../assets/test/c3.jpg'
  import timg4 from '../../../assets/test/c4.jpg'
  import timg5 from '../../../assets/test/c5.jpg'
  export default {
    name: '',
    props: {},
    data () {
      return {
        img: [timg1, timg2, timg3, timg4, timg5],
      }
    },
    computed: {},
    methods: {
      imgI (n) {
        alert(n)
      }
    },
    components: {
      carousel,
    },
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
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../../styles/common';
</style>