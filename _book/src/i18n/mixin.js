/**
 * Created by allen on 17-4-19.
 */
import Vue from 'vue'

export default Vue.mixin(({
  data () {
    return {}
  },
  computed: {
    lang () {
      if (this.$store) {
        return this.$store.state.lang
      } else {
        return ''
      }
    }
  },
  createdBefore () {
    if (!localStorage.lang) {
      localStorage.lang = this.$i18n.locale
    }
    if (this.$i18n) {
      this.$i18n.locale = localStorage.lang
    }
  },
  watch: {
    lang (me) {
      this.$i18n.locale = me;
    }
  }
}))
