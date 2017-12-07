<!--
组件功能，依赖等说明：
    阴影弹框组件
    1.vue2
    2.px2rem sass函数依赖，用于手机端rem（不需要直接删除，改成px）
使用：
    一. Attributes
        show {Boolean} 默认false,  显示组件

        title {String} 标题，（为空时slot分发）

        icon {}

        lineStyle {Object} 标题下方的线styled对象 title使用slot分发是无线，默认有线（可选惨，lineH线高, color颜色），不要线调用组件时 :lineStyle="{lineH: '0px'}"

        width {String} 展示框的宽度

    二.Events
        closeToast 关闭弹框事件 父组件 必须v-on监听，不用$on （详见vue官网，自定义事件）

    三.slot
        1. title
        2. icon  说明：再无title分发时有效
        3. container和未命名slot。

    四. 组件中存在问题
        1.事件传递时向父组件传递参数。父组件监听事件时，本身处理函数也需要传参数，如：将for循环中的数据作为参数传递，这种情况下组件传递到父组件的参数不能获取
-->


<template>
    <div class="toast"
         v-show="show"
         transition="toast-scale"
         @touchmove.prevent
         @scroll.prevent >
        <!-- 阴影 -->
        <div class="shadow"></div>

        <!-- 弹框 -->
        <div class="parent-box">
            <div class="toast-show" :style="{width: width}">
                <!-- 标题 -->
                <div class="title">
                    <slot name="title">
                        <div class="title-h">
                            <h1 class="title-name" v-if="title">{{title}}</h1>
                            <span class="close-icon" @click="closeToast()">
                                <slot name="icon">
                                    <span class="x">X</span>
                                </slot>
                            </span>
                        </div>
                        <!--line-->
                        <div :style="{height: lineStyle.lineH, backgroundColor: lineStyle.color, width: '100%'}"></div>
                    </slot>
                </div>


                <!-- 内容 -->
                <div>
                    <slot>
                        <div class="container"></div>
                    </slot>
                    <slot name="container"></slot>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

    export default {
        name: 'toast',
        props: {
            show: {
                default: false,
                type: Boolean
            },
            title: {
                default: '',
                type: String
            },
            icon: {
                default: '',
                type: String
            },
            lineStyle: {
                default: ()=> {
                    return {
                        lineH: '1px',
                        color: '#ff4800'
                    }
                },
                type: Object
            },
            width: {
                default: '94%',
                type: String
            }
        },
        data() {
            return {
                isShow: '',
            }
        },
        watch: {
            show(me) {
                this.isShow = me
            }
        },
        computed: {
        },
        methods: {
            closeToast() {
                this.$emit('closeToast')
            }
        },
        components: {},
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../styles/fun";

    .modal-scale-transition{
        transition: transform,
        /*opacity .6s ease;*/
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
    }

    .toast {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        color: black;
        z-index: 999;
        .shadow {
            background: rgba(0, 0, 0, .6);
            width: 100%;
            height: 100%;
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
            background: #fff;
            /*width: 94%;*/
            text-align: center;
            /*border-radius: 10px;*/
            .title {
                position: relative;
                .title-h {
                    height: px2rem(40px)
                }
                .title-name {
                    color: black;
                    font-size: 16px;
                    padding: 10px;
                    /*border-bottom: 1px solid #ff4800;*/
                }
                .close-icon {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    background: #fff;
                    .x {
                        display: inline-block;
                        padding: px2rem(3px) px2rem(6px);
                        border: 1px solid #eee;
                        font-size: px2rem(16px);
                    }
                }
            }
            .container {
                padding: px2rem(20px);
            }
        }
    }
</style>