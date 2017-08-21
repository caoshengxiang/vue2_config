/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const homePc = resolve => require.ensure([], () => resolve(require('../pages/home/home_pc.vue')), 'home')
const protocol = resolve => require.ensure([], () => resolve(require('../pages/home/protocol.vue')), 'home')
const homeM = resolve => require.ensure([], () => resolve(require('../pages/home/home_m.vue')), 'home')
const homeA = resolve => require.ensure([], () => resolve(require('../pages/home/home_ipad.vue')), 'home')

const live = resolve => require.ensure([], () => resolve(require('../pages/live/live.vue')), 'live')

export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: homePc,
        },
        {
            path: '/pc/home',
            name: 'homePC',
            component: homePc,
        }, {
            path: '/pc/protocol',
            name: 'protocol',
            component: protocol,
        },
        {
            path: '/m/home',
            name: 'homeMobile',
            component: homeM
        },
        {
            path: '/iPad/home',
            name: 'homeIpad',
            component: homeA
        },
        {
            path: '/live/:id',
            name: 'live',
            component: live
        },
        {
            path: '/test',
            component: test,
        },
    ]
})
