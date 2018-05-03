/*
 * @Author: wangkai
 * @Date: 2018-05-03 11:10:53
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-03 11:52:09
 * @Desc: 分页用到的方法和变量
 */

// 分页参数
export const pageKey = {
  offset: 0,
  limit: 10,
}

// 改变页数
export function pageChange(page) {
  this.pageKey.offset = (page - 1) * this.pageKey.limit;
  this.getList();
}

// 改变每页条数
export function pageSizeChange(current, pageSize) {
  this.pageKey.offset = 0;
  this.pageKey.limit = pageSize;
  this.getList();
}
