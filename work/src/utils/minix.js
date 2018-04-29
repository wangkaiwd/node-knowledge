/*
 * @Author: wangkai
 * @Date: 2018-04-28 23:59:48
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-04-29 00:00:33
 * @Desc: 项目公共方法封装
 */

export const getItem = (val) => {
  return JSON.parse(sessionStorage.getItem(val));
}
