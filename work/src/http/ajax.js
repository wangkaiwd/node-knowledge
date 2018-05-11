/*
 * @Author: wangkai
 * @Date: 2018-04-28 23:57:48
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-11 21:20:15
 * @Desc: axios进行封装
 */

// TODO:Nprogress没有使用成功
import axios from 'axios';
import { message } from 'antd'
import httpConfig from 'src/http/httpConfig'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import qs from 'qs'

// 创建axios的实例
export const $axios = axios.create({
  baseURL: `${httpConfig.HTTP_DOMAIN}:${httpConfig.HTTP_PORT}`,
  timeout: 1000,
  // headers: { 'Content-Type': 'application/json' }
});


// 通过拦截器统一处理每一次的响应和请求
$axios.interceptors.request.use((config) => {
  // 请求时的一些配置信息
  // console.log(config);
  // 设置post请求方式的请求头，如果不设置请求头的话，
  // post方式请求会多通过option进行一些请求
  if (config.method.toLowerCase() === 'post') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // 将post请求的数据处理成query参数：即key1=value1&key2=value2的格式
    config.data = qs.stringify(config.data);
  }
  // 进行跨域请求时携带cookie,否则无法获取到用户信息
  config.withCredentials = true;
  NProgress.start();
  return config;
}, (err) => {
  message.error('请求出错');
  return Promise.reject(err);
})

$axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    message.error(res.data.msg);
    return Promise.reject(res);
  }
  if (res.data.status === 0) {
    message.warning(res.data.message)
    return Promise.reject(res);
  }
  NProgress.done();
  return res.data;
},
  (err) => {
    message.error('网络异常');
    return Promise.reject(err);
  }
)


/**
 * @description
 *   axios发请求简单封装
 * @param {String} url 请求地址
 * @param {string} [type="get"] 请求方式
 * @return {function} 发起axios请求
 */
const callback = () => { }
export const ajaxFunc = (url, type = "get") =>
  /**
  * @description  进行axios请求
  * @param {any} [params={}] 请求参数
  * @param {any} success 请求成功时的回调
  * @param {any} fail 请求失败时的回调
  * FIXME:
  * 1. 这里的请求方法判断有一些小问题，仅仅针对get方法进行了处理
  * 由于工作中做多用到的就是get和post方法，所以暂时没有对其它方法进行判断
  * 2. 如果没有进行传参的话，参数应该默认为{}，则第一个参数就是成功的回调
  */
  (params = {}, success, fail = callback) => {
    let values;
    type === 'get' ? values = { params } : values = { ...params };
    $axios[type](url, values).then(
      res => success(res),
      err => fail(err)
    )
  }
