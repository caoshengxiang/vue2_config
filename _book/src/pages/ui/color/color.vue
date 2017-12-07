<template>
    <div style="padding: 50px;">
        <h1 class="h1">颜色选择器</h1>

        <div style="width: 100px;height: 100px" :style="{backgroundColor: value2}"></div>
        {{value2}}

        <div style="position: absolute;top: 300px;">
            选择颜色：
            <color-picker
                    @input="theColor"
                    :value="value2"></color-picker>
        </div>
        <div style="position: absolute;top: 300px;">
            选择颜色：
            <color-picker
                    @input="theColor"
                    :value="value2">
            </color-picker>
        </div>

        <div style="position: absolute;top:400px;">
            选择颜色：
            <color-picker
                    @input="theColor"
                    name="标题"
                    :value="value2">

            </color-picker>
        </div>
        <div style="position: absolute;top:300px;left: 300px">
            选择颜色：
            <color-picker
                    @input="theColor"
                    name="标题"
                    :isOpenStatus="show"
                    :value="value2">
                <div
                        @click="show = !show"
                        :style="{backgroundColor: value2}"
                        style="width: 50px;height: 50px;border-radius: 50%;"></div>
            </color-picker>
        </div>
    </div>
</template>
<script>
    import colorPicker from '../../../components/vue-color-picker/colorPicker.vue'

    export default {
        name: '',
        props: {},
        data () {
            return {
                value2: '#000',
                show: false
            }
        },
        computed: {},
        methods: {
            theColor (v) {
                this.value2 = v
            }
        },
        components: {
            colorPicker,
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