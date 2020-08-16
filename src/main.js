import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'

// 根域名
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 吧axios挂在到vue原型上
Vue.prototype.$axios = axios
// 通过请求拦截器统一设置请求头
axios.interceptors.request.use(config=> {
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
