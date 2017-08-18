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
        userInfo: {}, // 登陆用户
        loginStatus: false,
        totalBeans: 0, // 总魂豆
        totalCurrency: 0, // 总魂币
        isWithdrawSuc: false, // 提现成功返回
    },
    getters,
    actions,
    mutations,
    modules: {
        md,
    }
})
