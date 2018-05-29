import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import PageHome from '../components/pages/Home';
import PageProject from '../components/pages/Project';

const router = new Router({
    routes: [
        { path: '/', name: 'home', component: PageHome },
        { path: '/project/:slug', name: 'project', component: PageProject, props: true }
    ]
});

export default router;
