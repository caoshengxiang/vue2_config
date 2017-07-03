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
        <mt-button
                type="primary"
                @click="meth">
            {{ $t('operate') }}
        </mt-button>
        <mt-badge size="small" color="green">30</mt-badge>

        <a href="tel:15881182238">打电话</a>
        <a href="sms:15881182238">发短信</a>
    </div>
</template>
<script>
    import setLang from '../components/set_lang.vue'

    export default {
        name: 'Test',
        props: {},
        data () {
            return {
                placeholder: this.$t('placeholder')
            }
        },
        watch: {
            lang () {
                this.placeholder = this.$t('placeholder')
            }
        },
        computed: {},
        methods: {
            meth () {
                this.$toast(this.$t('say'))
            },
        },
        components: {
            setLang,
        },
        created() {
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    div {
        ul {
            li {
                list-style: none;
            }
        }
    }
</style>
