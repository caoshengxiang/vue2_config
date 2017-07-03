/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const home = resolve => require.ensure([], () => resolve(require('../pages/home/home.vue')), 'home')
const signIn = resolve => require.ensure([], () => resolve(require('../pages/sign/sign_in.vue')), 'sign')
const signUp = resolve => require.ensure([], () => resolve(require('../pages/sign/sign_up.vue')), 'sign')
const search = resolve => require.ensure([], () => resolve(require('../pages/search/search.vue')), 'search')

export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: home,
        },
        {
            name: 'home',
            path: '/home',
            component: home,
        }, {
            name: 'search',
            path: '/search',
            component: search,
        },
        {
            path: '/test',
            component: test,
        }
    ]
})
