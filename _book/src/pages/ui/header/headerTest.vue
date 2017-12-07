<template>
    <div>
        <h1 class="h1">手机页头组件</h1>

        <header-m
                title="首页"
                :path="{name: 'test', params: {id: 1}}">
            <dropdown-menu title="菜单"
                           :list="['个人中心', '钱包', '安全中心', '设置']"
                            slot="right">
            </dropdown-menu>
        </header-m>
    </div>
</template>
<script>
    import headerM from '../../../components/header/header_m.vue'
    import dropdownMenu from '../../../components/dropdown/dropdown_menu.vue'
    export default {
        name: '',
        props: {},
        data () {
            return {}
        },
        computed: {},
        methods: {},
        components: {
            headerM,
            dropdownMenu,
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