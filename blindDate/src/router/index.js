import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: "/", redirect: "/page1" },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    }
  ]
})
