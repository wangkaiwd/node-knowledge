/*
 * @Author: wangkai
 * @Date: 2018-04-28 23:58:50
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-04 23:35:22
 * @Desc: 项目请求接口
 */
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
