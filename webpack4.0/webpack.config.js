/*
 * @Author: wangkai
 * @Date: 2018-04-28 22:01:14
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-04-28 22:56:29
 * @Desc: webpack从零配置
 */
const path = require('path');

/**
 * path.resolve把一个路径或者路径片段的序列解析为一个绝对路径
 *
 * input: E:\data\businessLogic\webpack4.0\dist
 */
// console.log('resolve', path.resolve('dist'));
module.exports = {
  // entry: './src/index.js',  // 入口文件
  /**
   * 多入口文件
   * 1. 写成数组的方式打出多入口文件，不过这里打包后的文件都合成了一个
   * 2. 真正实现多入口、多出口要写成对象的方式
   */
  // entry: ['./src/index.js', 'src/login.js'], // 1.
  entry: {                                    // 2.
    index: './src/index.js',
    login: './src/login.js',
  },
  output: {
    // filename: 'bundle.js', // 打包的文件名称
    // 多入口文件：[name]就可以将入口文件名和出口文件名一一对应
    filename: '[name].js', // 打包后会生成 'index.js'和'login.js'
    path: path.resolve('dist'), // 打包后的目录，必须是绝对路径
  },

  mode: 'development', // 模式配置
}
