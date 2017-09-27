<!--折叠板-->
<template>
    <div class="collapse">
        <div class="c-title">
            <slot name="title">
                <span class="n">{{title}}</span>
                <img class="close" @click="closeCollapse" src="../../assets/icon/horizontalLine-32-padding.png" width="18">
            </slot>
        </div>
        <div class="c-content" v-show="isContentShow">
            <slot></slot>
        </div>
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
    @import "../../styles/var";
    .collapse {
        border: 1px solid $footer-border-color;
        box-shadow: inset 0 1px 0 0 #fff;
        width: 100%;
        box-sizing: border-box;
    }
    .c-title {
        padding: 10px 20px;
        border-bottom: 1px solid $footer-border-color;
        background-color: #F0F0F0;
        .n {

        }
        .close {
            float: right;
        }
    }
    .c-content {
        padding: 20px 0px;
        height: calc(200px - 39px);
        box-sizing: border-box;
        background-color: #F1F1F1;
    }
</style>