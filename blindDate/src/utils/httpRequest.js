import vue from 'vue'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import qs from 'qs'
import merge from 'lodash/merge'

(function () {
    window.SITE_CONFIG = {}

    // api接口请求地址
    window.SITE_CONFIG['baseUrl'] = 'http://120.79.170.160'

    // cdn地址 = 域名 + 版本号
    window.SITE_CONFIG['domain'] = './' // 域名
    window.SITE_CONFIG['version'] = ''   // 版本号(年月日时分)
    window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version
})()

const http = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})


/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
    //  更新加载中状态
    store.dispatch('setStatus', true)

    // config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
    return config
}, error => {
    return Promise.reject(error)
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {

    // store.commit('user/updateLoading', false)
    // if (response.data && response.data.code === 401) { // 401, token失效
    //     Vue.cookie.delete('token')
    //     router.options.isAddDynamicMenuRoutes = false
    //     router.push({ name: 'login' })
    // } else if ('data' in response.data) {
    //     return response.data
    // } else {
    //     return response
    // }
    return Promise.resolve(response.data)
}, error => {
    return Promise.reject(error)
})



/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = (actionName) => {
    // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
    return (process.env.NODE_ENV !== 'production' && process.env.OPEN_PROXY ? '/proxyApi' : window.SITE_CONFIG.baseUrl) + '/index.php/api/' + actionName
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 *   params: this.$http.adornParams({
      'page': this.commentDialog.pageIndex
     })
 */
http.adornParams = (params = {}, openDefultParams = true) => {
    var defaults = {
        't': new Date().getTime()
    }
    return openDefultParams ? merge(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 * 
            data: this.$http.adornData(params)
 */
http.adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
    var defaults = {
        't': new Date().getTime()
    }
    data = openDefultdata ? merge(defaults, data) : data
    return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http