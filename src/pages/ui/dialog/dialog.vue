<template>
    <div>
        <h1 class="h1">弹窗组件</h1>

        <button @click="isShow = !isShow">显示弹窗</button>
        <div>
            <com-dialog :show="isShow"
                        title="标题"
                        :lineStyle="{height: 0}"
                        :icon="false"
                        @close="isShow = false"
                        @saveHandle="saveHandle"
                        @cancelHandle="cancelHandle"
                        :toastShowStyle="{borderRadius: '10px', width: '500px'}">
                <div>
                    这里是弹窗内容
                </div>
            </com-dialog>
        </div>
    </div>
</template>
<script>
    import comDialog from '../../../components/toast/dialogBs.vue'
    export default {
        name: '',
        props: {},
        data () {
            return {
                isShow: false
            }
        },
        computed: {
        },
        methods: {
            saveHandle () {
                console.log('确定')
                this.isShow = false
            },
            cancelHandle () {
                console.log('取消')
                this.isShow = false
            }
        },
        components: {
            comDialog,
        },
        beforeCreate () {
        },
        created () {
        },
        beforeMount () {
        },
        mounted () {
        },
        beforeUpdate () {
        },
        updated () {
        },
        beforeDestroy () {
        },
        destroyed () {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../../styles/common";
$theme_color: #409eff;
$theme_bg: #ecf5ff;
$theme_font_color: #5a5e66;
</style>