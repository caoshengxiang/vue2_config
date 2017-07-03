<template>
  <div class="language">
    <a @click="setLanguage('cn')" v-if="lang == 'en'">中文</a>
    <a @click="setLanguage('en')" v-if="lang == 'cn'">En</a>
    <a @click="setLanguage('ja')" v-if="lang == 'ja'">ja</a>
  </div>
</template>
<script>

  export default {
    name: '',
    props: {},
    data () {
      return {}
    },
    computed: {

    },
    methods: {
      setLanguage (lan) {
        this.$store.commit('mut_lang', lan)
        localStorage.lang = lan;
      }
    },
    components: {},
    created () {
      if (localStorage.lang) {
        this.$store.commit('mut_lang', localStorage.lang)
      } else {
        this.$store.commit('mut_lang', this.$i18n.locale)
      }
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  /*@import "../styles/fun";*/
  /*button {*/
    /*padding: px2rem(10px) px2rem(15px);*/
    /*margin-bottom: px2rem(20px);*/
  /*}*/

  .language {
    color: #fff;
    display: inline-block;
    a {
      text-decoration: none;
    }
  }

</style>
