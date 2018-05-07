/*
 * @Author: wangkai
 * @Date: 2018-04-28 23:58:50
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-07 15:45:16
 * @Desc: 项目请求接口
 */
import dayjs from 'dayjs';
const date = dayjs().format('YYYY-MM-DD');

const week = [];
for (let i = 0; i <= 6; i++) {
  week.push(dayjs().subtract(i, 'day').format('YYYY-MM-DD'));
}
import { ajaxFunc } from './ajax';

// 商铺相关接口
// 获取商铺列表
export const fetchRestaurantsList = ajaxFunc('/shopping/restaurants?latitude=31.22967&longitude=121.4762');

// 获取商铺数量
export const fetchRestaurantsCount = ajaxFunc('/shopping/restaurants/count');

// 搜索餐馆（搜索内容不进行分页）
export const fetchRestaurantsSearch = ajaxFunc('/v4/restaurants?geohash=31.22967,121.4762');

// 更新餐馆
export const fetchRestaurantsUpdate = ajaxFunc('/shopping/updateshop', 'post');


// 登录相关接口
// 获取验证码
export const fetchLoginGetcode = ajaxFunc('/v1/captchas', 'post');

// 登录
export const fetchLogin = ajaxFunc('/v2/login', 'post');

// 管理员登录
export const fetchLoginAdmin = ajaxFunc('/admin/login', 'post');

// 管理员信息
export const fetchLoginAdminInfo = ajaxFunc('/admin/info');

// 管理员退出
export const fetchLoginSingout = ajaxFunc('/admin/singout');

// 列表管理
// 用户列表
export const fetchLoginUsersList = ajaxFunc('/v1/users/list');

// 获取所有用户注册量
export const fetchLoginUsersCount = ajaxFunc('/v1/users/count');

// 管理员列表
export const fetchLoginAdminList = ajaxFunc('/admin/all');

// 获取管理员数量
export const fetchLoginAdminCount = ajaxFunc('/admin/count');

// 仪表盘相关
// 获取某天用户注册量
export const fetchTodayUserCount = ajaxFunc(`/statis/user/${date}/count`);

// 获取某天订单数量
export const fetchTodayOrderCount = ajaxFunc(`/statis/order/${date}/count`);

// 获取某天管理员注册量
export const fetchTodayAdminCount = ajaxFunc(`/statis/admin/${date}/count`);

// 获取所有用户注册量
export const fetchTotalUserCount = ajaxFunc('/v1/users/count');

// 获取所有订单数量
export const fetchTotalOrderCount = ajaxFunc('/bos/orders/count');

// 图表展示
// 获取用户分布信息
export const fetchUserCityCount = ajaxFunc('/v1/user/city/count');
