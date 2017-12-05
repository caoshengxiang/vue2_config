<template>
    <div>
        <h1 class="h1">右键菜单</h1>
        <p class="h3">可在红色区域右键，</p>
        <div style="width: 600px;height: 400px; border: 1px solid red;margin: auto;">
            <key-menu
                    @content="handleContent"
                    @index="handleIndex"
                    :menuList="['复制', '粘贴', '剪贴', '打印', '保存', '另存为...']"></key-menu>
        </div>
    </div>
</template>
<script>
    import keyMenu from '../../../components/right_click_menu/right_click_menu.vue'
    export default {
        name: '',
        props: {},
        data () {
            return {}
        },
        computed: {},
        methods: {
            handleContent (c) {
                console.log('子菜单：'+c)
            },
            handleIndex (i) {
                console.log('子菜单索引：'+i)
            }
        },
        components: {
            keyMenu,
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
</style>