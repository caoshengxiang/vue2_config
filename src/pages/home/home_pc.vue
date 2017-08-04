<template>
    <div class="home">
        home
    </div>
</template>
<script>

    export default {
        name: 'home',
        props: {},
        data () {
            return {

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

        },
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .home {

    }
</style>
