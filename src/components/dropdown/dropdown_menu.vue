<!--
 组件使用绝对定位,所以要求父元素必须有定位
-->

<template>
    <div class="dropdown-menu">
        <div @click="displayDropdown">
            <slot name="dropdownLink"></slot>
        </div>
        <div class="menu" v-show="dropdownShow" @click="displayDropdown">
            <slot name="menuList"></slot>
        </div>

    </div>
</template>
<script>

    export default {
        name: '',
        props: {
        },
        data () {
            return {
                dropdownShow: false
            }
        },
        computed: {},
        methods: {
            displayDropdown () {
                this.dropdownShow = !this.dropdownShow
            },
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
    .dropdown-menu {
        position: relative;
    }
    .menu {
        position: absolute;
        right: 0;
        border: 1px solid #BBBBBB;
        padding: 5px 10px;
        width: 60px;
        z-index: 5;
        background-color: #fff;
        color: #000000;
    }
</style>