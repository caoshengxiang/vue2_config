/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')
const demo1 = resolve => require.ensure([], () => resolve(require('../pages/demo/demo1.vue')), 'test')

const home = resolve => require.ensure([], () => resolve(require('../pages/home/home.vue')), 'home')


export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: home,
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/test',
            component: test,
        },
        {
            path: '/demo1',
            name: 'demo1',
            component: demo1,
        }
    ]
})
