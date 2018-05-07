import ToastComponent from './toast.vue'
let $vm;
export default {
    install: function (Vue, options) {
        Vue.component('toast-component',ToastComponent)
    }
};