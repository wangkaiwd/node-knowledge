/*
 * @Author: wangkai
 * @Date: 2018-04-28 22:01:14
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-04-29 00:05:22
 * @Desc: webpack从零配置
 */
const path = require('path');

// 插件都是一个类，命名时尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * path.resolve把一个路径或者路径片段的序列解析为一个绝对路径
 *
 * input: E:\data\businessLogic\webpack4.0\dist
 */
// console.log('resolve', path.resolve('dist'));

// TODO:多入口文件的第一种方式没有实现
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
    // 添加文件可以防止文件缓存，每次都会生成四位的hash串
    // filename: 'bundle.[hash:4].js',
    // 多入口文件：[name]就可以将入口文件名和出口文件名一一对应
    filename: '[name].js', // 打包后会生成 'index.js'和'login.js'
    path: path.resolve('dist'), // 打包后的目录，必须是绝对路径
  },
  plugins: [
    // 通过new这个类来使用插件
    // new HtmlWebpackPlugin({
    //   /**
    //    * 用哪个html作为模板
    //    * 在scr目录下创建index.html当做模板来用
    //    */
    //   template: './src/index.html',
    //   hash: true, // 会在打包好的bundle.js后面加上hash串
    // })

    // 多页面开发配置多页面
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']  // 设置对应关系，index.html对应的时index.js
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login.html',
      chunks: ['login']  // 设置对应关系，login.html对应的时login.js
    })
  ],
  mode: 'development', // 模式配置
}
