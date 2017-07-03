<template>
    <div class="category">
        <h1 class="title">--- 商品分类 ---</h1>
        <ul class="category-list">
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>DIT</div>
            </li>
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>调色</div>
            </li>
            <li>
                <img src="../../../assets/pic-32.png" alt="">
                <div>监看设备</div>
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
    .category {
        width: 100%;
        .title {
            font-size: px2rem(16px);
            font-weight: bold;
            text-align: center;
            padding: px2rem(10px);
        }
        .category-list {
            width: 100%;
            display: flex;
            li {
                box-sizing: border-box;
                padding: px2rem(12px);
                height: px2rem(125px);
                text-align: center;
                img {
                    width: px2rem(100px);
                    height: px2rem(80px);
                }
                /*div {*/
                    /*text-align: left;*/
                /*}*/
            }
            li:nth-child(2n-1) {
                border-bottom: 1px solid #ccc;
                border-top: 1px solid #ccc;
                width: 33%;
            }
            li:nth-child(2n) {
                border: 1px solid #ccc;
                width: 34%;
            }
        }
    }

</style>