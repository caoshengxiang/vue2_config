/**
 * Created by allen on 17-4-26.
 */
import Vue from 'vue'
import router from './router'
import App from './app.vue'
import store from './store'
import './styles/basic.scss'
import i18n from './i18n'

import './components/awesome'

// 全局组件
import './components/collapse'

// 全局组件2
import dialog from './components/toast'
Vue.use(dialog)

new Vue({
    el: '#app',
    store,
    router,
    i18n,
    // components: { App }
    render: h => h(App)
})