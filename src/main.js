// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  axios from '@/axios/api'
// import axios from './axios/api'// 导入api接口
import './mock' 
import 'lib-flexible/flexible.js' //px 转 rem
import FastClick from 'fastclick' //解决移动端click事件300毫秒延迟方法
FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
