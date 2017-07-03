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
            <div class="toast-show">
                <!-- 标题 -->
                <div class="title">
                    <h1 v-if="title" class="to-ti">{{title}}</h1>
                    <slot v-else name="title"></slot>
                    <span class="to-icon" @click="closeToast()"><i @click="closeToast()" class="sprites pic-16"></i></span>
                </div>

                <!-- 内容 -->
                <div class="container">
                    <slot></slot>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

    export default {
        name: '',
        props: {
            title: {
                default: '',
                type: String
            },
            icon: {
                default: '',
                type: String
            }
        },
        data() {
            return {}
        },
        computed: {
            show() {
                return this.$store.state.toastShow
            }
        },
        methods: {
            closeToast() {
                this.$store.commit('mut_toast', false);
                this.$emit('close_event')
            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/sprites.css";
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

        .shadow {
            background: rgba(0, 0, 0, .6);
            width: 100%;
            height: 100%;
            z-index: 999;
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
            z-index: 1004;
            background: #fff;
            width: 94%;
            text-align: center;
            .title {
                position: relative;
                .to-ti {
                    color: black;
                    font-size: 16px;
                    padding: 10px;
                    border-bottom: 1px solid #ff4800;
                }
                .to-icon {
                    position: absolute;
                    top: 0px;
                    right: 0;
                    z-index: 1008;
                    background: #fff;
                }
            }
            .container {
                padding: px2rem(20px);
            }
        }
    }
</style>