<!--
定制组件，按钮
组件功能，依赖等说明：
    阴影弹框组件
    1.vue2
    2.px2rem sass函数依赖，用于手机端rem（不需要直接删除，改成px）
使用：
    一. Attributes
        show {Boolean} 默认false,  显示组件

        title {String} 标题，（为空时slot分发）

        icon 关闭图标显示

        lineStyle {Object} 标题下方的线styled对象 title使用slot分发是无线，默认有线（可选惨，lineH线高, color颜色），不要线调用组件时 :lineStyle="{lineH: '0px'}"

        toastShowStyle {Object} 展示框的样式对象 【主要是width，border-radius】

        mainColor 主色调

    二.Events
        closeToast 关闭弹框事件 父组件 必须v-on监听，不用$on （详见vue官网，自定义事件）
        handleSave 确定按钮
        handleCancel 取消按钮

    三.slot
        1. title
        2. icon  说明：再无title分发时有效
        3. container和未命名slot。

    四. 组件中存在问题
        1.事件传递时向父组件传递参数。父组件监听事件时，本身处理函数也需要传参数，如：将for循环中的数据作为参数传递，这种情况下组件传递到父组件的参数不能获取
        2. 过度效果没写完


    使用列子
    <com-dialog :show="isShow"
                        title="标题"
                        :lineStyle="{height: 0}"
                        mainColor="red"
                        @close="isShow = false"
                        @saveHandle="saveHandle"
                        @cancelHandle="cancelHandle"
                        :toastShowStyle="{borderRadius: '10px', width: '500px'}">
                <div>
                    这里是弹窗内容
                </div>
            </com-dialog>
-->


<template>
    <transition name="toast">
        <div class="toast"
             v-show="show"
             @touchmove.prevent
             @scroll.prevent>
            <!-- 阴影 -->
            <div class="shadow"></div>

            <!-- 弹框 -->
            <div class="parent-box">
                <div class="toast-show" :style="toastShowStyle">

                    <!-- 标题 -->
                    <div class="title" :style="{'background-color': mainColor}">
                        <slot name="title">
                            <div class="title-h">
                                <h1 class="title-name">{{title}}</h1>
                                <span class="close-icon" @click="closeToast" v-if="icon">
                                                  <slot name="icon">
                                                      <span class="x" :style="{'color': mainColor}">X</span>
                                                  </slot>
                                              </span>
                            </div>
                            <!--line-->
                            <div :style="{height: lineStyle.lineH, backgroundColor: lineStyle.color, width: '100%'}"></div>
                        </slot>
                    </div>


                    <!-- 内容 -->
                    <div class="container">
                        <slot>
                            <div></div>
                        </slot>
                        <slot name="container"></slot>
                    </div>

                    <!-- footer -->
                    <div class="dia-footer">
                        <slot name="footer">
                            <button class="btn save"
                                    :style="{'background-color': mainColor, 'border-color': mainColor}"
                                    @click="handleSave">确定
                            </button>
                            <button class="btn cancel"
                                    @click="handleCancel">取消
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'ComDialog',
        props: {
            show: { // 弹窗显示隐藏
                default: false,
                type: Boolean
            },
            title: { // 标题
                default: '',
                type: String
            },
            icon: { // 关闭图标显示
                default: true,
                type: Boolean
            },
            lineStyle: {
                default: () => { // 标题下方线
                    return {
                        lineH: '1px',
                        color: '#ff4800'
                    }
                },
                type: Object
            },
            toastShowStyle: { //弹窗css
                default: () => {
                    return {
                        width: '40%',
                        borderRadius: '0px'
                    }
                },
                type: Object
            },
            mainColor: { // 弹窗主色
                default: '#409eff',
                type: String
            }
        },
        data () {
            return {
//        isShow: '',
            }
        },
        watch: {
//      show (me) {
//        this.isShow = me
//      }
        },
        computed: {},
        methods: {
            closeToast () {
                this.$emit('close')
            },
            handleSave () {
                this.$emit('saveHandle')
            },
            handleCancel () {
                this.$emit('cancelHandle')
            }
        },
        components: {},
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    /*html,body { overflow: hidden; }*/
    .modal-scale-transition {
        transition: all 0.6s;
        /*opacity .6s ease;*/
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-enter-to {
        opacity: 1;
        transition: all 6s;
    }

    .toast {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        color: black;
        z-index: 999;
        /*overflow: hidden;*/
        .shadow {
            background: rgba(0, 0, 0, .6);
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
            background: #fff;
            border-radius: 10px;
            max-height: 100%;
            overflow-x: hidden;
            /*overflow-y: hidden;*/
            .title {
                position: relative;
                text-align: center;
                .title-h {
                    height: 50px
                }
                .title-name {
                    font-size: 16px;
                    padding: 10px;
                    color: #fff;
                    /*border-bottom: 1px solid #ff4800;*/
                }
                .close-icon {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    cursor: pointer;
                    .x {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        box-sizing: border-box;
                        padding: 3px 6px;
                        font-size: 16px;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background-color: #fff;
                    }
                }
            }
            .container {
                padding: 20px;
            }
            .dia-footer {
                padding: 20px;
                text-align: center;
            }
        }
    }

    .btn {
        border: 0;
        width: 100px;
        font-size: 13px;
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;
        &.save {
            color: #fff;
        }
        .cancel {
            background-color: #fff;
        }
    }
</style>
