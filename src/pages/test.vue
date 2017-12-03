<i18n>
    {
    "cn": {
    "name": "组件",
    "operate": "操作",
    "placeholder": "用户名",
    "say": "你好世界"

    },
    "en": {
    "name": "component",
    "operate": "operate",
    "placeholder": "username",
    "say": "hello world"
    }
    }
</i18n>
<template>
    <div>
        <set-lang></set-lang>
        <div>{{$t('name')}}</div>

        <input type="text" :placeholder="placeholder">

        <br>
        <br>input　v-model问题 方案１
        <input type="text" :value="inputText" @input="updateMessage">
        <br> 方案２
        <input type="text" v-model="cptInputText">

        <collapse title="镖旗"></collapse>

        <button @click="isShow = !isShow">显示弹窗</button>
        <com-dialog :show="isShow"
                    title="标题"
                    :lineStyle="{height: 0}"
                    :icon="true"
                    @close="isShow = false"
                    @saveHandle="saveHandle"
                    @cancelHandle="cancelHandle"
                    :toastShowStyle="{borderRadius: '10px', width: '500px'}">
            <div>
                这里是弹窗内容
            </div>
        </com-dialog>
    </div>
</template>
<script>
    import {mapMutations, mapState} from 'vuex'
    import setLang from '../components/set_lang.vue'

    export default {
        name: 'Test',
        props: {},
        data () {
            return {
                placeholder: this.$t('placeholder'),
                isShow: false
            }
        },
        watch: {
            lang () {
                this.placeholder = this.$t('placeholder')
            }
        },
        computed: {
            ...mapState([
                'inputText'
            ]),
            cptInputText: {
                get() {
                    return this.inputText
                },
                set(value) {
                    this.mut_inputText(value)
                }
            }
        },
        methods: {
            ...mapMutations([
                'mut_inputText'
            ]),
            updateMessage (e) {
                this.mut_inputText(e.target.value)
            },
            saveHandle () {
                console.log('确定')
                this.isShow = false
            },
            cancelHandle () {
                console.log('取消')
                this.isShow = false
            }
        },
        components: {
            setLang,
        },
        created() {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    div {
        ul {
            li {
                list-style: none;
            }
        }
    }
</style>
