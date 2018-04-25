import axios from 'axios';
import httpConfig from 'src/http'
// import {  }
export const getItem = (val) => {
  return JSON.parse(sessionStorage.getItem(val));
}


// TODO:封装公用的ajax方法

// 创建axios的实例
const $axios = axios.create({
  baseURL: `${httpConfig.HTTP_DOMAIN}:${HTTP_PORT}`,
  timeout: 1000,
});

// 通过拦截器统一处理每一次的响应和请求
$axios.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (err) => {

  return Promise.reject(error);
})

$axios.interceptors.response.use((response) => {
  return response;
})

const ajaxFunc = (url, type) => () => {

}