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
    strict: true, // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
    state: {
        lang: '', // 语言
        toastShow: false, // 弹框显示
        inputText: '',
    },
    getters,
    actions,
    mutations,
    modules: {
        md,
    }
})
