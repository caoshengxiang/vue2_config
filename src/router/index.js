/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const homePc = resolve => require.ensure([], () => resolve(require('../pages/home/home_pc.vue')), 'home')

const appIntro = resolve => require.ensure([], () => resolve(require('../pages/home/protocol/app_intro.vue')), 'home')
const protocolPricacy = resolve => require.ensure([], () => resolve(require('../pages/home/protocol/pricacy_pro.vue')), 'home')
const protocolUser = resolve => require.ensure([], () => resolve(require('../pages/home/protocol/user_pro.vue')), 'home')


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
            path: '/pc/user/pro',
            name: 'userPro',
            component: protocolUser,
        }, {
            path: '/pc/app/intro',
            name: 'appIntro',
            component: appIntro,
        }, {
            path: '/pc/pri/pro',
            name: 'protocolPricacy',
            component: protocolPricacy,
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
