<!--
右键菜单组件

右键区域自适应父元素宽高,区域内容直接放在组件<right-click-menu>内

1. props:

menuList 菜单列表数组

2. slot
默认 content部分

3. Event:

子菜单点击返回两个数据：
 子菜单内容，@content
 菜单索引 @index

 说明：
 右键区域由父容器宽高决定，

例子：
<div style="width: 600px;height: 400px;border: 1px solid red">
      <right-click-menu @content="getContent" @index="getIndex" :menuList="menu">
            <div style="width: 50px;height: 50px;background-color: red;margin-left: 100px;">测试</div>
      </right-click-menu>
</div>

methods: {
     getContent(c) {
          console.log(c)
     },
     getIndex(i) {
          console.log(i)
     }
},

-->

<template>
    <div class="r-c-m" id="rcm" @contextmenu="preventDefault" @mousedown="rightClickMenuHandle">
        <slot>
            <ul class="menu-content" v-show="menuDisplay" :style="{left: menuX + 'px', top: menuY + 'px'}">
                <li v-for="(item, index) in menuList"
                    :key="index"
                    @mousedown.stop="clickItemMenu(item, index)"
                >{{item}}
                </li>
            </ul>
        </slot>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {
            menuList: {
                default: [],
                type: Array
            }
        },
        data () {
            return {
                menuDisplay: false,
                menuX: 0,
                menuY: 0,
            }
        },
        computed: {},
        methods: {
            preventDefault (e) {
                e.preventDefault()
            },
            rightClickMenuHandle (e) {
                if (e.button === 2) { // 执行右键代码
                    this.menuX = e.clientX - document.getElementById('rcm').offsetLeft
                    this.menuY = e.clientY - document.getElementById('rcm').offsetTop
                    this.menuDisplay = true
                } else if (e.button === 0) { // 执行左键代码
                    this.menuDisplay = false
                } else if (e.button === 1) { // 你点了滚轮
                    this.menuDisplay = false
                }

            },
            clickItemMenu (item, index) {
                this.$emit('content', item)
                this.$emit('index', index+1)
                this.menuDisplay = false
            }
        },
        components: {},
        beforeCreate () {},
        created () {},
        beforeMount () {},
        mounted () {},
        beforeUpdate () {},
        updated () {},
        beforeDestroy () {},
        destroyed () {}
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

    .r-c-m {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .menu-content {
        position: absolute;
        border: 1px solid #888;
        border-radius: 5px;
        min-width: 100px;
        z-index: 1000;
        overflow: hidden;
        li {
            border-bottom: 1px solid #ccc;
            padding: 3px 5px;
            cursor: pointer;
            background-color: #fff;
            &:last-child {
                border: 0;
            }
        }
    }
</style>