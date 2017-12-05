/**
 * Created by allen on 17-4-18.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import './mixin'
Vue.use(VueI18n)

// import messages from './i18n_data'

export default new VueI18n({
  locale: 'cn',
  // messages, // 这里必须命名为messages,否则不能翻译.
})

/** 填坑
 * 1. vue-cli项目配置loader使用@kazupon/vue-i18n-loader;不是vue-i18n-loader
 *
 * 2. 单文件组件国际化后全局定义的数据不能监听变化进行翻译(如在i8n_data目录下的不会
 *    翻译)
 *
 * 3. <i18n></i18n>是json文本数据,用""
 *
 * */
