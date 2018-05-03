/*
 * @Author: wangkai
 * @Date: 2018-04-28 23:59:48
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-02 17:59:52
 * @Desc: 项目公共方法封装
 */

/**
 * @description 获取浏览器本地存储
 * @param {any} val 获取的内容
 * @param {any} storage 存储方式
 * @returns 浏览器存储中的内容
 */
export const getItem = (val, storage) => {
  return JSON.parse(storage.getItem(val));
}

/**
 * @description 将内容存储到浏览器本地存储
 * @param {string} val 存储内容的键值
 * @param {any} content 存储内容的属性值
 * @param {any} storage 存储类型
 * @param {boolean} cover 是否覆盖原有内容（true:覆盖（默认值），false:不覆盖）
 */
export const setItem = (val, content, storage, cover = true) => {
  if (cover) {
    const params = JSON.stringify(content);
    storage.setItem(val, params);
    return
  }
  const info = getItem(val, storage);
  if (Object.toString.call(info) === "[Object Array]") {
    info.push(content)
    const params = JSON.stringify(info);
    storage.setItem(val, params);
  }
}
