/*
 * @Author: wangkai
 * @Date: 2018-04-28 23:58:50
 * @Last Modified by:   wangkai
 * @Last Modified time: 2018-04-28 23:58:50
 * @Desc: 项目请求接口
 */
import { ajaxFunc } from './ajax';

// 获取商铺列表
export const fetchRestaurantsList = ajaxFunc('/shopping/restaurants?latitude=31.22967&longitude=121.4762');
// 获取商铺数量
export const fetchRestaurantsCount = ajaxFunc('/shopping/restaurants/count');
// 搜索餐馆（搜索内容不进行分页）
export const fetchRestaurantsSearch = ajaxFunc('/v4/restaurants?geohash=31.22967,121.4762');
