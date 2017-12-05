<!--
手机页头

1. props
title  标题
path  路由 String or Object 与vue-router路由
styles 页头样式

2. slot
left 左侧
默认  标题
right  右侧

说明：
移动端基于rem, 依赖styles/fun.scss的px2rem函数
需要在index.html设置<meta name="viewport" id="viewport" content="width=device-width, initial-scale=1">
-->

<template>
    <div class="header-m" :style="styles">
        <div class="left">
            <slot name="left">
                <router-link :to="path" slot="left" style="color: #fff;display: flex;align-items: center;justify-content: flex-start">
                    <!--<icon name="chevron-left" scale="1" style="color: #fff"></icon>&nbsp;<span>返回</span>-->
                    < &nbsp;<span>返回</span>
                </router-link>
            </slot>
        </div>
        <div class="title">
            <slot>
                {{title}}
            </slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>
<script>

    export default {
        name: '',
        props: {
            title: {
                type: String,
                default: ''
            },
            styles: {
                type: Object,
                default() {
                    return {
                        color: '#fff',
                        background: '#000'
                    }
                }
            },
            path: {
                type: [String, Object],
                default: '/'
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {},
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
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
    .header-m {
        padding: px2rem(50px) px2rem(10px);
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-size: 14px;
        height: px2rem(50px);
        line-height: 1;
        position: relative;
        text-align: center;
        white-space: nowrap;
        .left {
            text-align: left;
            flex: 0.5;
        }
        .title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: inherit;
            font-weight: 400;
            flex: 1;
        }
        .right {
            text-align: right;
            flex: 0.5;
        }
        a {
            text-decoration: none;
        }
    }
</style>