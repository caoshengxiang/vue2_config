<template>
    <div class="header-m" :style="styles">
        <div class="left">
            <slot name="left">

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
        padding: px2rem(18px) px2rem(10px);
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
    }
</style>