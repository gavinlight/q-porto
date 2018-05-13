// console.log = function(){};

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(router);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});

var controller = new ScrollMagic.Controller();



var items = document.querySelectorAll('article#project-creative-code > .parallax-item');
for(var i = 0; i < items.length; i++){
    // var parallax =

    var scene = new ScrollMagic.Scene({
      triggerElement: 'article#project-creative-code', // starting scene, when reaching this element
      triggerHook: 1,
      duration: '250%'
    }).setTween(TweenMax.to(items[i], 1, {
    	y: ((i + 1) * 200) + '%'
    })).addTo(controller);
    // console.log((i + 1 * 200) + '%');
}


// Add Scene to ScrollMagic Controller
controller.addScene(scene);