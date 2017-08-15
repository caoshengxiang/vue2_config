<template>
    <div style="text-align: center">
        <div>
            <button id="ctrl" @click="onShape('ctrl')">操作</button>
            <button id="line" @click="onShape('line')">直线</button>
            <button id="arrow" @click="onShape('arrow')">箭头</button>
            <button id="polyline" @click="onShape('polyline')">折线</button>
            <button id="circle" @click="onShape('circle')">圆</button>
            <button id="rect" @click="onShape('rect')">方形</button>
            <button id="ellipse" @click="onShape('ellipse')">椭圆</button>
            <button id="text" @click="onShape('text')">文本</button>
            <button id="print" @click="print()">打印</button>
            边框: <input @change="strokeColorHandle($event)" type="color">
            填充: <input @change="fillColorHandle($event)" value="#fff" type="color">
        </div>
        <div id="drawing" style="border:2px solid #aaaaaa;width: 1000px;height: 700px;margin: 0 auto"></div>

        <div class="img">
            <img v-for="item in images" :src="item" alt="" @mousedown="onImageChoose(item)" style="width: 100px; height: 100px;">
        </div>
    </div>
</template>
<script>
    import SVG from 'svg.js'
    import t1 from './11.jpg'
    import qq from './qq.png'
    export default {
        name: 'demo',
        props: {},
        data() {
            return {
                type: 'ctrl', // 操作
                draw: '', // 画板
                startPos: { // 起始坐标
                    x: 0,
                    y: 0
                },
                mousePos: { // 鼠标相对画板坐标
                    x: 0,
                    y: 0
                },
                endPos: {
                    x: 0,
                    y: 0
                },
                shape: null, // 保存操作对象
                strokeColor: '#000',
                fillColor: '#fff',
                images: [t1, qq],
                image: ''
            }
        },
        computed: {},
        methods: {
            onShape(type) {
                this.type = type
            },
            print() {
                if (this.draw) {
                    console.log(this.draw.svg())
                    window.print(this.draw.svg())
                }
            },
            strokeColorHandle(ev) {
                this.strokeColor = ev.target.value
            },
            fillColorHandle(ev) {
                this.fillColor = ev.target.value
            },
            onImageChoose(img) {
                this.image = img
                this.type = 'image'

                if (this.shape && this.type === 'image') { //
                    this.shape.attr('href', '')
                }
                this.shape = 'image'
            }
        },
        components: {},
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
            const that = this

            this.draw = SVG('drawing').size('100%', '100%')

            this.draw.on('mousedown', function (ev) {
                that.startPos = { x: ev.offsetX, y: ev.offsetY }
                switch (that.type) {
                    case 'ctrl':
                        break
                    case 'line':
                        that.shape = that.draw.line(that.startPos.x, that.startPos.y, that.startPos.x, that.startPos.y)

                        that.shape.stroke({ color: that.strokeColor, width: 2, linecap: 'round' })
                        break
                    case 'arrow':
                        that.shape = that.draw.line(that.startPos.x, that.startPos.y, that.startPos.x, that.startPos.y)
                        that.shape.stroke({ color: that.strokeColor, width: 2, linecap: 'round' })
                        that.shape.marker('end', 9, 6, function (add) {
                            add.path('M0,0 L0,6 L9,3 Z').fill(that.strokeColor)
                        })
                        break
                    case "polyline":
                        that.shape = that.draw.line(that.startPos.x, that.startPos.y, that.startPos.x, that.startPos.y)

                        that.shape.stroke({ color: that.strokeColor, width: 2, linecap: 'round' })
                        break
                    case "circle":
                        that.shape = that.draw.circle(0).move(that.startPos.x, that.startPos.y)
                        that.shape.stroke({color: that.strokeColor, width: 2, linecap: 'round'}).fill(that.fillColor)
                        break
                    case "rect":
                        that.shape = that.draw.rect(0,0).move(that.startPos.x, that.startPos.y)
                        that.shape.stroke({color: that.strokeColor, width: 2, linecap: 'round'}).fill(that.fillColor)
                        break
                    case "ellipse":
                        that.shape = that.draw.ellipse(0,0).move(that.startPos.x, that.startPos.y)
                        that.shape.stroke({color: that.strokeColor, width: 2, linecap: 'round'}).fill(that.fillColor)
                        break
                    case 'text':
                        let text = prompt('输入文本')

                        if (text) {
                            that.shape = that.draw.text(text).move(that.startPos.x, that.startPos.y)
                            that.shape.dx(0).dy(-10).fill(that.strokeColor)
                        }
                        break
                    default:

                }
            })
            this.draw.on('mousemove', function (ev) {
                if (that.shape === null) {
                    return;
                }
                that.mousePos = { x: ev.offsetX, y: ev.offsetY }
                switch (that.type) {
                    case 'ctrl':
                        break
                    case 'line':
                        that.shape.attr('x2', that.mousePos.x)
                        that.shape.attr('y2', that.mousePos.y)
                        break
                    case 'arrow':
                        that.shape.attr('x2', that.mousePos.x)
                        that.shape.attr('y2', that.mousePos.y)
                        break
                    case "polyline":
                        that.shape.attr('x2', that.mousePos.x)
                        that.shape.attr('y2', that.mousePos.y)
                        break
                    case "circle":
                        that.shape.attr('r', Math.sqrt(Math.pow(that.mousePos.x-that.startPos.x, 2)+Math.pow(that.mousePos.y-that.startPos.y, 2)))
                        break
                    case "rect":
                        that.shape.attr('width', Math.abs(that.mousePos.x-that.startPos.x))
                        that.shape.attr('height', Math.abs(that.mousePos.y-that.startPos.y))
                        break
                    case "ellipse":
                        that.shape.attr('rx', Math.abs(that.mousePos.x-that.startPos.x))
                        that.shape.attr('ry', Math.abs(that.mousePos.y-that.startPos.y))
                        break
                    case 'text':
                        break
                    case 'image':
                        if (that.shape === 'image') {
                            that.shape = that.draw.image(that.image)
                        }
                        that.shape.size(100,100).move(that.mousePos.x, that.mousePos.y)
                        break
                    default:

                }
            })
            this.draw.on('mouseup', function (ev) {
                if (that.shape === null) {
                    return;
                }
                that.endPos = { x: ev.offsetX, y: ev.offsetY }
                switch (that.type) {
                    case 'ctrl':
                        break
                    case 'line':
                        that.shape.attr('x2', that.endPos.x)
                        that.shape.attr('y2', that.endPos.y)
                        that.shape = null
                        break
                    case 'arrow':
                        that.shape.attr('x2', that.endPos.x)
                        that.shape.attr('y2', that.endPos.y)
                        that.shape = null
                        break
                    case "polyline":
                        break
                    case "circle":
                        that.shape.attr('r', Math.sqrt(Math.pow(that.endPos.x-that.startPos.x, 2)+Math.pow(that.endPos.y-that.startPos.y, 2)))
                        that.shape = null
                        break
                    case "rect":
                        that.shape.attr('width', that.endPos.x-that.startPos.x)
                        that.shape.attr('height', that.endPos.y-that.startPos.y)
                        that.shape = null
                        break
                    case "ellipse":
                        that.shape.attr('rx', Math.abs(that.endPos.x-that.startPos.x))
                        that.shape.attr('ry', Math.abs(that.endPos.y-that.startPos.y))
                        that.shape = null
                        break
                    case 'text':
                        break
                    case 'image':
                        that.shape = null
                        break
                    default:

                }
            })

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