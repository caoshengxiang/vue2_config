/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const signIn = resolve => require.ensure([], () => resolve(require('../pages/sign/sign_in.vue')), 'sign')
const recharge = resolve => require.ensure([], () => resolve(require('../pages/home/recharge.vue')), 'recharge')
const rechargeDetail = resolve => require.ensure([], () => resolve(require('../pages/home/recharge_detail.vue')), 'recharge')
const rechargeSuccess = resolve => require.ensure([], () => resolve(require('../pages/home/recharge_success.vue')), 'recharge')
const withdraw = resolve => require.ensure([], () => resolve(require('../pages/home/withdraw.vue')), 'withdraw')

export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: signIn,
        }, {
            path: '/signin',
            name: 'signIn',
            component: signIn
        }, {
            path: '/recharge',
            name: 'recharge',
            component: recharge
        },{
            path: '/recharge_d',
            name: 'rechargeDetail',
            component: rechargeDetail
        },{
            path: '/recharge_s',
            name: 'rechargeSuccess',
            component: rechargeSuccess
        },{
            path: '/withdraw',
            name: 'withdraw',
            component: withdraw
        },
        {
            path: '/test',
            component: test,
        },
    ]
})
