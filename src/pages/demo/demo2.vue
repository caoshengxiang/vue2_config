<template>
    <div>
        <div id="drawing" style="border:2px solid #aaaaaa;width: 1000px;height: 700px;margin: 0 auto"></div>
    </div>
</template>
<script>
    import SVG from 'svg.js'
    import 'svg.select.js'
    import 'svg.select.js/dist/svg.select.css'
    import 'svg.resize.js'
    import 'svg.draggable.js'

    export default {
        name: '',
        props: {},
        data() {
            return {
                draw: ''
            }
        },
        computed: {},
        methods: {},
        components: {},
        beforeCreate() {
        },
        created() {

        },
        beforeMount() {
        },
        mounted() {
            this.draw = SVG('drawing').size('100%', '100%')
            let rect = this.draw.rect(50, 50).move(20, 20).fill('#f06')

            rect.on('click', function () {
                rect.selectize({deepSelect: true, radius: 10}).resize()
                rect.draggable()
            })

            let re = this.draw.rect(50, 50).fill('#f06').draggable()

            re.on('click', function () {
                rect.selectize(false)
            })

            rect.onblur = function () {
                rect.selectize(false)
            }
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
<style lang="scss" rel="stylesheet/scss" scoped>
</style>