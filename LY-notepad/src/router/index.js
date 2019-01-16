import Vue from 'vue'
import Router from 'vue-router'
import nHeader from '@/components/nHeader'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'nHeader',
      component: nHeader
    }
  ]
})
