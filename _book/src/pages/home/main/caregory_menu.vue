<template>
    <div class="category-menu">
        <div class="cate-bg" @click="closeCateMenu"></div>
        <div class="cate-lists">
            <ul>
                <li class="cate-item">
                    <div class="cate-one">
                        <h1>一级分类 </h1>
                        <i @click="openTwoMenu" class="sprites pic-16" v-if="twoShow == 'none'"></i>
                        <i @click="closeTwoMenu" class="sprites menu-16" v-else></i>
                    </div>
                    <div class="cate-two" :style="{display: twoShow}">
                        <h2>二级分类</h2>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>4</li>
                        </ul>
                    </div>
                </li>

                <li class="cate-item">
                    <div class="cate-one">
                        <h1>一级分类 </h1>
                        <i class="sprites pic-16"></i>
                    </div>
                    <div class="cate-two">

                    </div>
                </li><li class="cate-item">
                <div class="cate-one">
                    <h1>一级分类 </h1>
                    <i class="sprites pic-16"></i>
                </div>
                <div class="cate-two">

                </div>
            </li><li class="cate-item">
                <div class="cate-one">
                    <h1>一级分类 </h1>
                    <i class="sprites pic-16"></i>
                </div>
                <div class="cate-two">

                </div>
            </li>
            </ul>
        </div>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {},
        data() {
            return {
                twoShow: 'none'
            }
        },
        computed: {},
        methods: {
            closeCateMenu() {
                this.$emit('close_menu')
            },
            openTwoMenu() {
                this.twoShow = 'block'
            },
            closeTwoMenu() {
                this.twoShow = 'none'
            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../../styles/fun";
    @import "../../../styles/sprites.css";
    .category-menu {
        position: absolute;
        top: -20px;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 20;
        .cate-bg {
            width: 100%;
            height: 100%;
            background: rgba(0,0,0, .5);
            z-index: 21;
        }
        .cate-lists {
            z-index: 22;
            background: #fff;
            height: 100%;
            position: absolute;
            top: 1px;
            left: 0%;
            animation: fade-in .6s;
            width: 70%;
            ul{
                width: 100%;

            }
            .cate-item {
                width: 100%;
                margin-bottom: 2px;

                .cate-one {
                    padding: px2rem(15px);
                    /*height: px2rem(45px);*/
                    background: #a8a3a3;
                    box-sizing: border-box;
                    position: relative;
                    h1 {
                        font-size: px2rem(16px);

                    }
                    i {
                        position: absolute;
                        top: px2rem(15px);
                        right: px2rem(15px);
                    }
                }
            }
        }

        @keyframes fade-in {
            from {
                left: -70%
            }
            to {
                left: 0%;
            }
        }
    }
</style>