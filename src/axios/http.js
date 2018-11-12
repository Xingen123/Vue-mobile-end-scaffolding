
import axios from 'axios'
import { Indicator } from 'mint-ui';
import 'mint-ui/lib/style.css'
//设置默认的请求超时时间 这里是10s
// axios.defaults.timeout = 10000 
// //post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置，即设置post的请求头为
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 创建axios实例
const instance = axios.create({ timeout: 1000 * 12 });
// // 请求拦截器
instance.interceptors.request.use(

  response => {
    Indicator.open('Loading...');

    return response;

  },error =>{
    setTimeout(function(){Indicator.close()},1000);
    return Promise.reject(error);
  
})
  
// 响应拦截器
instance.interceptors.response.use( 
  
  response => {
    setTimeout(function(){Indicator.close()},1000);
    return response.status === 200 ? Promise.resolve(response):Promise.reject(response);

  },error =>{
    setTimeout(function(){Indicator.close()},1000);
    return Promise.reject(error);
  
  }

)
 
 
export default instance