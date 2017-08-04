/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const home_pc = resolve => require.ensure([], () => resolve(require('../pages/home/home_pc.vue')), 'home')
const home_m = resolve => require.ensure([], () => resolve(require('../pages/home/home_m.vue')), 'home')
const home_a = resolve => require.ensure([], () => resolve(require('../pages/home/home_a.vue')), 'home')

export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: home_pc,
        },
        {
            path: '/pc',
            name: 'homePC',
            component: home_pc,
        },
        {
            path: '/m',
            name: 'homeMobile',
            component: home_m
        },
        {
            path: '/apid',
            name: 'homeApid',
            component: home_a
        },
        {
            path: '/test',
            component: test,
        }
    ]
})
