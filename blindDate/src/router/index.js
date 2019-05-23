import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const _import = require('./_import_' + process.env.NODE_ENV)
export default new Router({
  mode: 'hash',
  routes: [
    { path: "/", redirect: "/page1" },
    {
      path: '/page1',
      name: 'Page1',
      component: _import('page1')
    },
    {
      path: '/page2',
      name: 'Page2',
      component: _import('page2')
    },
    {
      path: '/page3',
      name: 'Page3',
      component: _import('page3')
    },
    {
      path: '/page4',
      name: 'Page4',
      component: _import('page4')
    }
  ]
})