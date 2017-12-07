<!--

 下拉菜单 (基于vue2、ES6、SASS)

1. props
title 标题
list 菜单列表

2. slot
dropdownLink 标题
menuList 菜单列表

3. event
childList 子菜单被点击事件 @return { Object } // O.name 子菜单名称 O.index 子菜单序号
-->

<template>
    <div class="dropdown-menu">
        <div @click="displayDropdown" class="dropdown-link">
            <slot name="dropdownLink">
                <span class="title">{{title}}</span>
            </slot>
        </div>
        <transition name="tra">
            <div class="dropdown-list" v-show="dropdownShow" @click="displayDropdown">
                <slot name="menuList">
                    <ul>
                        <li class="li"
                            v-for="(item, i) in list"
                            :title="item"
                            @click="handleListClick(i, item)">{{item}}</li>
                    </ul>
                </slot>
            </div>
        </transition>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {
            title: { // 菜单标题
                type: String,
                default: ''
            },
            list: { // 子菜单列表
                type: Array,
                defualt () {
                    return []
                }
            }
        },
        data () {
            return {
                dropdownShow: false
            }
        },
        computed: {},
        methods: {
            displayDropdown () {
                this.dropdownShow = !this.dropdownShow
            },
            handleListClick (i, item) {
                this.$emit('childList', {index: i + 1, name: item})
            }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    $theme_color: #409eff;
    $theme_bg: #ecf5ff;
    $theme_padding: 20px;
    @mixin a_line {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .dropdown-menu {
        position: relative;
        display: inline-block;
        text-align: center;
    }
    .dropdown-link {
        /*padding: 0 10px;*/
        .title {
            cursor: pointer;
            color: $theme_color;
        }
    }
    .dropdown-list {
        position: absolute;
        right: 0;
        z-index: 2018;
        /*padding: 10px 0;*/
        margin: 5px 0;
        background-color: #fff;
        border: 1px solid #e6ebf5;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        font-size: 13px;
        color: #5a5e66;
        @include a_line;
        .li {
            padding: 5px $theme_padding;
            font-size: 13px;
            &:hover {
                background-color: $theme_bg;
                cursor: pointer;
                color: $theme_color;
            }
        }
    }
    .tra-enter {
        opacity: 0;
    }
    .tra-enter-to {
        opacity: 1;
        transition: all 0.6s;
    }
</style>