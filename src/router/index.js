import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import PageHome from '../components/pages/Home';
import PageAbout from '../components/pages/About';
import PageProject from '../components/pages/Project';

const router = new Router({
    routes: [
        { path: '/', name: 'home', component: PageHome },
        { path: '/about', name: 'about', component: PageAbout },
        { path: '/project/:slug', name: 'project', component: PageProject, props: true }
    ]
});

router.beforeEach(function (to, from, next) {
    if(to.name !== 'home') setTimeout(() => { window.scrollTo(0, 0), 100 });
    next();
})

export default router;
