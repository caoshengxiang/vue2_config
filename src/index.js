/**
 * Created by allen on 17-4-26.
 */
import Vue from 'vue'
import router from './router'
import App from './app.vue'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './styles/basic.scss'
import i18n from './i18n'

Vue.use(Mint);

new Vue({
    el: '#app',
    store,
    router,
    i18n,
    // components: { App }
    render: h => h(App)
})