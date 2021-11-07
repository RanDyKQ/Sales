import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(ElementUI)
// 配置请求api根路径
axios.defaults.baseURL = 'http://127.0.0.1:8980/v1'
// axios请求拦截
axios.interceptors.request.use(config => {
  // 为请求头对象，添加token验证的Authorization字段
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  config.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token')
  return config
})
// 将axios挂载到vue的原型中，可通过 this.$http.get等 全局使用
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
