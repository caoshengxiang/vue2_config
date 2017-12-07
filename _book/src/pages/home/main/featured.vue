<template>
    <div class="featured">
        <h1 class="title">--- 精选商品 ---</h1>
        <ul class="featured-list">
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>
                    <p class="commodity-name"
                       style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                        此处显示商品名称,显示两行,显示不全换行,两行显示不下使用三个个点的符号</p>
                    <p class="commodity-price">￥1000</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>
                    <p class="commodity-name"
                       style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                        此处显示商品名称</p>
                    <p class="commodity-price">￥1000</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>
                    <p class="commodity-name"
                       style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                        此处显示商品名称,显示两行</p>
                    <p class="commodity-price">￥1000</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>
                    <p class="commodity-name"
                       style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                        此处显示商品名称,显示两行,显示不全换行,两行显示不下使用三个个点的符号</p>
                    <p class="commodity-price">￥1000</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>
                    <p class="commodity-name"
                       style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                        此处显示商品名称,显示两行,显示不全换行,两行显示不下使用三个个点的符号</p>
                    <p class="commodity-price">￥1000</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>
                    <p class="commodity-name"
                       style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                        此处显示商品名称,显示两行,显示不全换行,两行显示不下使用三个个点的符号</p>
                    <p class="commodity-price">￥1000</p>
                </div>
            </li>

        </ul>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {},

    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../../styles/fun";
    .featured {
        margin-top: px2rem(10px);
        .title {
            font-size: px2rem(16px);
            font-weight: bold;
            text-align: center;
            padding: px2rem(10px);
        }
        .featured-list {
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            li:nth-child(2n-1) {
                margin-right: 2%;
            }
            li {
                width: 49%;
                height: px2rem(250px);
                img {
                    width: 100%;
                    height: px2rem(173px);
                }
                .commodity-name {
                    /*display: -webkit-box;*/
                    /*-webkit-box-orient: vertical;*/
                    /*换行样式写在这里时,浏览器中并没有该样式,不知为何,将样式写在了标签上*/
                    /*-webkit-line-clamp: 2;*/
                    /*overflow: hidden;*/
                }
                .commodity-price {
                }
            }
        }
    }
</style>