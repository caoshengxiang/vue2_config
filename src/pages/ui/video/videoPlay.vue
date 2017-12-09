<template>
    <div>
        <div style="width: 600px;margin: auto">
            <com-video></com-video>
        </div>
    </div>
</template>

<script>
    import ComVideo from '../../../components/video/video'
    export default {
        name: 'video-play',
        data () {
            return {

            }
        },
        components: {
            ComVideo,
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>