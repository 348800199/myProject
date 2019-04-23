import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/page1'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'
import Page4 from '@/components/page4'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: "/", redirect: "/page1" },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    }
  ]
})