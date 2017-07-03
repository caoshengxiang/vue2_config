<template>
    <div class="menu-bar">
        <span class="menu-left" @click="cateMenuBtn"><i class="sprites menu-32"></i></span>
        <span class="title" @click="toHome">Cinegear</span>
        <span class="menu-right">
            <a @click="searchPage"><i class="sprites search-32" style="transform: scale(0.75)"></i></a>
            <a>
                <i class="sprites shoping-32 msg-signal">
                    <span class="tips">2</span>
                </i>
            </a>
        </span>
    </div>
</template>
<script>

    export default {
        name: 'MenuBar',
        props: {},
        data() {
            return {
                shop: '2',
            }
        },
        computed: {},
        methods: {
            searchPage() {
                this.$router.push({path: 'search'});
            },
            toHome() {
                this.$router.push({path: 'home'});
            },
            cateMenuBtn() {
                this.$emit('open_menu')
            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/var";
    @import "../../styles/sprites.css";
    @import "../../styles/fun";
    .menu-bar {
        height: px2rem(50px);
        line-height: px2rem(50px);
        padding-left: $page-padding;
        padding-right: $page-padding;
        text-align: center;
        border: 3px solid #ffffff;
        .menu-left {
            float: left;
            padding-top: px2rem(9px);
        }
        .title {
            font-size: px2rem(18px);
            font-weight: bold;
        }
        .menu-right {
            float: right;
            padding-top: px2rem(9px);
            a:nth-child(2){
                margin-left: px2rem(12px);
            }
        }
        .menu-right:after{
            content: '';
            display: inline-block;
            clear: both;
        }
        .msg-signal {
            position: relative;
            .tips {
                position: absolute;
                top: px2rem(-8px);
                left: px2rem(22px);
                padding: 0 px2rem(5px);
                background: red;
                line-height: px2rem(18px);
                color: #fff;
                border-radius: 50%;
                font-size: px2rem(12px);
                z-index: -1;
            }
        }
    }
</style>