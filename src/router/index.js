/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const indexPage = resolve => require.ensure([], () => resolve(require('../pages/index.vue')), 'test')
const test = resolve => require.ensure([], () => resolve(require('../pages/test.vue')), 'test')

const dropdownMenu = resolve => require.ensure([], () => resolve(require('../pages/ui/dropdown/deopdownTest.vue')), 'dropdownMenu')

const header = resolve => require.ensure([], () => resolve(require('../pages/ui/header/headerTest.vue')), 'header')
const collapse = resolve => require.ensure([], () => resolve(require('../pages/ui/collapse/collapse.vue')), 'collapse')
const icon = resolve => require.ensure([], () => resolve(require('../pages/ui/icon/icon.vue')), 'icon')
const rightMenu = resolve => require.ensure([], () => resolve(require('../pages/ui/rightKeyMumu/menu.vue')), 'rightMenu')
const dialog = resolve => require.ensure([], () => resolve(require('../pages/ui/dialog/dialog.vue')), 'dialog')
const color = resolve => require.ensure([], () => resolve(require('../pages/ui/color/color.vue')), 'color')

export default new Router({
    // mode: 'history', // 这个模式路由没有#
    routes: [
        {
            path: '',
            component: test,
        },
        {
            path: '/test/:id',
            name: 'test',
            component: test,
        },
        {
            path: '/ui',
            component: indexPage,
            children: [
                {
                    path: 'dropdown_menu',
                    name: 'dropdownMenu',
                    component: dropdownMenu,
                }, {
                    path: 'header',
                    name: 'header',
                    component: header,
                }, {
                    path: 'collapse',
                    name: 'collapse',
                    component: collapse,
                }, {
                    path: 'icon',
                    name: 'icon',
                    component: icon,
                }, {
                    path: 'right_menu',
                    name: 'rightMenu',
                    component: rightMenu,
                }, {
                    path: 'dialog',
                    name: 'dialog',
                    component: dialog,
                }, {
                    path: 'color',
                    name: 'color',
                    component: color,
                }
            ],
        }
    ]
})
