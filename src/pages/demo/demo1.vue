<template>
    <div style="text-align: center">
        <div>
            <button id="ctrl" @click="onShape('ctrl')">操作</button>
            <button id="line" @click="onShape('line')">直线</button>
            <button id="polyline" @click="onShape('polyline')">折线</button>
            <button id="circle" @click="onShape('circle')">圆</button>
            <button id="rect" @click="onShape('rect')">方形</button>
            <button id="ellipse" @click="onShape('ellipse')">椭圆</button>
            <button id="print" @click="print()">打印</button>
        </div>
        <div id="drawing" style="border:2px solid #aaaaaa;width: 1000px;height: 700px;margin: 0 auto"></div>
    </div>
</template>
<script>
    import SVG from 'svg.js'
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
            }
        },
        computed: {},
        methods: {
            onShape(type) {
                this.type = type
            },
            evt() { // event
                /*if (window.event) {
                    return window.event;
                }
                let func = evt.caller;

                while (func !== null) {
                    let arg0 = func.arguments[0];

                    if (arg0) {
                        if ((arg0.constructor === Event || arg0.constructor === MouseEvent
                                || arg0.constructor === KeyboardEvent)
                            || (typeof (arg0) === "object" && arg0.preventDefault
                                && arg0.stopPropagation)) {
                            return arg0;
                        }
                    }
                    func = func.caller;
                }
                return null;*/
            },
            pos(o) { // 坐标
                /*let ev = evt();

                return { x: ev.offsetX, y: ev.offsetY };*/
            },
            print() {
                if (this.draw) {
                    console.log(this.draw.svg())
                    window.print(this.draw.svg())
                }
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

                        that.shape.stroke({ color: '#f06', width: 2, linecap: 'round' })
                        break
                    case "polyline":
                        that.shape = that.draw.line(that.startPos.x, that.startPos.y, that.startPos.x, that.startPos.y)

                        that.shape.stroke({ color: '#f06', width: 2, linecap: 'round' })
                        break
                    case "circle":
                        that.shape = draw.circle(100).move(that.startPos.x, that.startPos.y)
                        break
                    case "rect":
                        break
                    case "ellipse":
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
                    case "polyline":
                        that.shape.attr('x2', that.mousePos.x)
                        that.shape.attr('y2', that.mousePos.y)
                        break
                    case "circle":

                        break
                    case "rect":
                        break
                    case "ellipse":
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
                    case "polyline":
                        break
                    case "circle":
                        that.shape = null
                        break
                    case "rect":
                        break
                    case "ellipse":
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