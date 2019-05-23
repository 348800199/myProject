// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/js/remConfig.js'
import '@/assets/css/base.css'
import 'swiper/dist/css/swiper.css';
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
import '@/components/componentRegister.js'
import store from '@/store'

Vue.config.productionTip = false
Vue.prototype.$http = httpRequest // ajax请求方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
