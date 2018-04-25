import { ajaxFunc } from 'utils/minix'

// 项目的接口地址

// 获取商铺列表
export const fetchRestaurantsList = ajaxFunc('/shopping/restaurants?latitude=31.22967&longitude=121.4762');
// 获取商铺数量
export const fetchRestaurantsCount = ajaxFunc('/shopping/restaurants/count');
// 搜索餐馆
export const fetchRestaurantsSearch = ajaxFunc('/v4/restaurants?geohash=31.22967,121.4762');
