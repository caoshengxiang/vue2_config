<template>
    <div class="search">
        <div class="search-header">
            <a class="close" @click="closeSearch"><i class="sprites pic-32"></i></a>
            <h1 @click="toHome">Cinegear</h1>
        </div>
        <mt-search v-model="value">
            <mt-cell
                    v-for="item in result"
                    :title="item.title"
                    :value="item.value">
            </mt-cell>
        </mt-search>
    </div>
</template>
<script>

    export default {
        name: '',
        props: {},
        data() {
            return {
                value: '',
                result: [
                    {title: '1', value: '相关1'},
                    {title: '2', value: '相关2'},
                    {title: '3', value: '相关3'}
                ]
            }
        },
        computed: {},
        methods: {
            closeSearch() {
                this.$router.go(-1)
            },
            toHome() {
                this.$router.push({path: 'home'});
            }
        },
        components: {},
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../styles/sprites.css";

    .search {
        color: #fff;
        text-align: center;
        background: #aaa9a9;
    }
    .search-header {
        position: relative;
        height: 44px;
        a {
            position: absolute;
            left: 6px;
            top: 6px;
        }
        h1 {
            font-weight: bold;
            line-height: 44px;
            font-size: 16px;
        }
    }
</style>