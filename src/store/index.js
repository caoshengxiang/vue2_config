/**
 * Created by allen on 17-4-14.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import md from './modules/md'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: '', // 语言
        toastShow: false, // 弹框显示
    },
    getters,
    actions,
    mutations,
    modules: {
        md,
    }
})
