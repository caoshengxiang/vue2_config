<template>
    <div>
        ipad
    </div>
</template>
<script>
    import platform from '../../utils/utils'
    export default {
        name: '',
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
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
        components: {},
        beforeCreate() {
        },
        created() {
            this.jumpPlatform()
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
<style lang="sass" rel="stylesheet/scss" scoped>
</style>