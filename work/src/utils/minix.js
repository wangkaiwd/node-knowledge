import axios from 'axios';

export const getItem = (val) => {
  return JSON.parse(sessionStorage.getItem(val));
}


// TODO:封装公用的ajax方法
const $axios = axios.create({
  baseURL: 'http://cangdu.org:8001',
  timeout: 1000,
});
$axios.interceptors.request.use((config) => {
  console.log(config);
  return config;
})

const ajaxFunc = (url, type) => () => {

}