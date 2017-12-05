<template>
    <div class="home">
        <page-header></page-header>
        <menu-bar @open_menu="openMenu"></menu-bar>

        <div class="home-con">
            <div class="swipe-wall">
                <mt-swipe :auto="4000">
                    <mt-swipe-item style="background: red">1</mt-swipe-item>
                    <mt-swipe-item style="background: gainsboro">2</mt-swipe-item>
                    <mt-swipe-item style="background: green">3</mt-swipe-item>
                </mt-swipe>
            </div>

            <category></category>
            <featured></featured>

            <div class="show-cate-menu" :style="{display: menuShow}">
                <category-menu @close_menu="closeMenu"></category-menu>
            </div>
        </div>

    </div>
</template>
<script>
    import pageHeader from '../../components/header/header.vue'
    import menuBar from '../../components/header/menu_bar.vue'
    import category from './main/category.vue'
    import featured from './main/featured.vue'
    import categoryMenu from './main/caregory_menu.vue'
    export default {
        name: 'home',
        props: {},
        data () {
            return {
                menuShow: 'block'
            }
        },
        computed: {},
        methods: {
            openMenu() {
                this.menuShow = 'block'
            },
            closeMenu() {
                this.menuShow = 'none'
            }
        },
        components: {
            pageHeader,
            menuBar,
            category,
            featured,
            categoryMenu,
        },
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    .home {
        .home-con {
            position: relative;

            .swipe-wall {
                width: 100%;
                height: 200px;
                position: relative;
                top: -20px;
                margin-top: 20px;
                margin-bottom: -10px;
            }
        }
    }
</style>
