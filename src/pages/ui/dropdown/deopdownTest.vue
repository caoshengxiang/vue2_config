<template>
    <div style="text-align: center">
        <h1 class="h1">下拉菜单组件</h1>

        <h3 class="h3">默认菜单</h3>
        <dropdown-menu
                @childList="childListHandle"
                title="默认菜单"
                :list="['菜单1', '菜单2', '菜单3','菜单2']"
        ></dropdown-menu>

        <div class="com-dashed-line" style="margin: 30px 0px;"></div>

        <h3 class="h3">slot自定义菜单</h3>
        <dropdown-menu>
            <div slot="dropdownLink" class="link">下拉菜单 ></div>
            <div slot="menuList" class="list">
                <ul>
                    <li>子菜单1</li>
                    <li>子菜单2</li>
                    <li>子菜单3子菜单3</li>
                </ul>
            </div>
        </dropdown-menu>
        <p style="color: #ccc;">瑶草一何碧，春入武陵溪。<br>
            溪上桃花无数，花上有黄鹂，<br>
            我欲穿花寻路，直入白云深处，<br>
            浩气展虹霓。只恐花深里，<br>
            红露湿人衣。坐玉石，欹玉枕，<br>
            拂金徽。谪仙何处，天人伴我白螺杯。<br>
            我为灵芝仙草，不为朱唇丹脸，长啸亦何为<br>
            ！醉舞下山去，明月逐人归</p>
    </div>
</template>
<script>
    import dropdownMenu from '../../../components/dropdown/dropdown_menu.vue'

    export default {
        name: '',
        props: {},
        data () {
            return {}
        },
        computed: {},
        methods: {
            childListHandle (child) {
                console.log(child.index, child.name)
            }
        },
        components: {
            dropdownMenu,
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../../styles/common";

    .link {
        font-size: 13px;
        padding: 5px 10px 5px 20px;
        background-color: $theme_color;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }

    .list {
        background-color: #fff;
        padding: 3px 0px;
        li {
            padding: 5px 20px;
            color: #5a5e66;
            border-bottom: 1px dashed #ccc;
            text-align: left;
            &:last-child {
                border: 0;
            }
            &:hover {
                color: $theme_color;
                cursor: pointer;
            }
        }
    }
</style>