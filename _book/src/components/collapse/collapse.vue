<!--
折叠板

1. props
title 标题

2. slot
title 标题栏
默认 容器
-->
<template>
    <div class="collapse">
        <div class="c-title">
            <slot name="title">
                <span class="n">{{title}}</span>
                <!--<img class="close" @click="closeCollapse" src="../../assets/icon/horizontalLine-32-padding.png" width="18">-->
                <span  class="close" @click="closeCollapse">-</span>
            </slot>
        </div>
        <transition name="tra">
            <div class="c-content" v-show="isContentShow">
                <slot></slot>
            </div>
        </transition>

    </div>
</template>
<script>

    export default {
        name: 'collapse',
        props: {
            title: {
                default: '',
                type: String
            }
        },
        data () {
            return {
                isContentShow: true
            }
        },
        computed: {},
        methods: {
            closeCollapse() {
                this.isContentShow = !this.isContentShow
            }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    $footer-border-color: #ccc;
    $theme_color: #409eff;
    $theme_bg: #ecf5ff;
    $theme_font_color: #5a5e66;
    .collapse {
        box-shadow: inset 0 1px 0 0 #fff;
        width: 100%;
        box-sizing: border-box;
    }
    .c-title {
        padding: 10px 20px;
        border: 1px solid $footer-border-color;
        background-color: #F0F0F0;
        color: $theme_font_color;
        .n {

        }
        .close {
            float: right;
            cursor: pointer;
        }
    }
    .c-content {
        padding: 20px 0px;
        height: calc(200px - 39px);
        box-sizing: border-box;
        background-color: #F1F1F1;
        border: 1px solid $footer-border-color;
    }
    .tra-enter {
        opacity: 0;
    }
    .tra-enter-to {
        opacity: 1;
        transition: all 0.6s;
    }
</style>