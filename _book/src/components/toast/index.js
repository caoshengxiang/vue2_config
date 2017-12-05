import dialog from './dialogBs.vue';

/* istanbul ignore next */
dialog.install = function(Vue) {
    Vue.component(dialog.name, dialog);
};

export default dialog;