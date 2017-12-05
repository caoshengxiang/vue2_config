<template>
  <div class="language">
    <button @click="setLanguage('cn')" v-if="lang == 'en'">中文</button>
    <button @click="setLanguage('en')" v-if="lang == 'cn'">En</button>
    <button @click="setLanguage('ja')" v-if="lang == 'ja'">ja</button>
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
    display: inline-block;
    a {
      text-decoration: none;
    }
  }

</style>
