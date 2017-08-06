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


        <video-player  ref="videoPlayer"
                       :options="playerOptions"

                       >
        </video-player>
    </div>
</template>
<script>
    import setLang from '../components/set_lang.vue'

    export default {
        name: 'Test',
        props: {},
        data () {
            return {
                placeholder: this.$t('placeholder'),
                playerOptions: {

                    // component options
                    start: 0,
                    playsinline: false,

                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "../../assets/home/author.jpg",
                }
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
<style lang="scss" rel="stylesheet/scss" scoped>
    div {
        ul {
            li {
                list-style: none;
            }
        }
    }
</style>
