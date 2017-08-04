/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const homePc = resolve => require.ensure([], () => resolve(require('../pages/home/home_pc.vue')), 'home')
const homeM = resolve => require.ensure([], () => resolve(require('../pages/home/home_m.vue')), 'home')
const homeA = resolve => require.ensure([], () => resolve(require('../pages/home/home_ipad.vue')), 'home')

export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: homePc,
        },
        {
            path: '/pc',
            name: 'homePC',
            component: homePc,
        },
        {
            path: '/m',
            name: 'homeMobile',
            component: homeM
        },
        {
            path: '/iPad',
            name: 'homeIpad',
            component: homeA
        },
        {
            path: '/test',
            component: test,
        }
    ]
})
