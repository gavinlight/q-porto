// console.log = function(){};

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(router);

window.position = {x: 0, y: 0};
window.mousePos = (x, y) => window.position = {x: x, y: y};
Vue.prototype.mousePos = mousePos

window.scrollController = new ScrollMagic.Controller();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App ref="app"/>',
    components: { App },
    methods: {
        getRouterView(){
            return this.$refs.app.$refs.routerView;
        },
        setMousePos(clientX, clientY){
            return this.getRouterView().$emit('mouse-pos', clientX, clientY);
        }
    }
});