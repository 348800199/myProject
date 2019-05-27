import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 按需引入
const _import = require('./_import_' + process.env.NODE_ENV)
const routerModer = new Router({
  mode: 'hash',
  routes: [
    { path: "/", redirect: "/page1" },
    {
      path: '/page1',
      name: 'Page1',
      component: _import('page1'),
      meta: { keepAlive: true }
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
  ],

})
routerModer.beforeEach((to, from, next) => {
  // to.meta.keepAlive = false; // B 跳转到 A 时，让 A 不缓存，即刷新（代码写在C页面）
  next()
})

export default routerModer
