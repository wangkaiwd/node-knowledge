import axios from 'axios';
import { message } from 'antd'
import httpConfig from 'src/http/httpConfig'


export const getItem = (val) => {
  return JSON.parse(sessionStorage.getItem(val));
}

// 创建axios的实例
export const $axios = axios.create({
  baseURL: `${httpConfig.HTTP_DOMAIN}:${httpConfig.HTTP_PORT}`,
  timeout: 1000,
});

// 通过拦截器统一处理每一次的响应和请求
$axios.interceptors.request.use((config) => {
  // 请求时的一些配置信息
  // console.log(config);
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
  * @description
  *   进行axios请求
  * @param {any} [params={}] 请求参数
  * @param {any} success 请求成功时的回调
  * @param {any} fail 请求失败时的回调
  */
  (params = {}, success, fail = callback) => {
    let values;
    type === 'get' ? values = { params } : values = { ...params };
    $axios[type](url, values).then(
      res => success(res),
      err => fail(err)
    )
  }
