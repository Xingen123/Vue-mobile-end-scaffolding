

import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/reset.css' //全局css

import './mock'  //数据模拟脱离后端独立开发

import './vconsole' //移动端调试工具 上线之前别忘记注掉

import 'lib-flexible/flexible.js' //px 自动转 rem

import FastClick from 'fastclick' //解决移动端click事件300毫秒延迟方法

import  axios from '@/axios/api'// import axios from './axios/api'// 导入api接口



//安装px2rem后，再使用px上有些不同，大家可以参考px2rem官方介绍，下面简单介绍一下。
// 直接写px，编译后会直接转化成rem —- 除开下面两种情况，其他长度用这个
// 在px后面添加/no/，不会转化px，会原样输出。 — 一般border需用这个
// 在px后面添加/px/,会根据dpr的不同，生成三套代码。—- 一般字体需用这个

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
//                       .::::.
//                     .::::::::.
//                    :::::::::::
//                 ..:::::::::::'
//              '::::::::::::'
//                .::::::::::
//           '::::::::::::::..
//                ..::::::::::::.
//              ``::::::::::::::::
//               ::::``:::::::::'        .:::.
//              ::::'   ':::::'       .::::::::.
//            .::::'      ::::     .:::::::'::::.
//           .:::'       :::::  .:::::::::' ':::::.
//          .::'        :::::.:::::::::'      ':::::.
//         .::'         ::::::::::::::'         ``::::.
//     ...:::           ::::::::::::'              ``::.
//    ```` ':.          ':::::::::'                  ::::..
//                       '.:::::'                    ':'````..