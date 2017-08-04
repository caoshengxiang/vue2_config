<template>
    <div class="home">
        <div class="part-1">

        </div>
        <div>

        </div>
    </div>
</template>
<script>
    import platform from '../../utils/utils'
    export default {
        name: 'home',
        props: {},
        data () {
            return {
                platform: ''
            }
        },
        computed: {},
        methods: {
            openMenu() {
                this.menuShow = 'block'
            },
            closeMenu() {
                this.menuShow = 'none'
            },
            jumpPlatform() {
                if (platform() === 'Android' || platform() === 'iPhone') {
                    this.$router.push({name: 'homeMobile'})
                } else if (platform() === 'iPad') {
                    this.$router.push({name: 'homeIpad'})
                } else {
                    this.$router.push({name: 'homePC'})
                }
            }
        },
        components: {

        },
        created() {
            this.platform = platform()
            this.jumpPlatform()
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .home {

    }
</style>
