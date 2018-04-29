/*
 * @Author: wangkai
 * @Date: 2018-04-28 22:01:14
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-04-29 22:26:22
 * @Desc: webpack从零配置
 */
const path = require('path');

// 插件都是一个类，命名时尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
/**
 * path.resolve把一个路径或者路径片段的序列解析为一个绝对路径
 *
 * input: E:\data\businessLogic\webpack4.0\dist
 */
// console.log('resolve', path.resolve('dist'));

/**
 * TODO:
 * 1. 多入口文件第一种配置方式
 * 2. 拆分多个css文件
 * 配置完了postcss
 */
module.exports = {
  entry: './src/index.js',  // 入口文件
  /**
   * 多入口文件
   * 1. 写成数组的方式打出多入口文件，不过这里打包后的文件都合成了一个
   * 2. 真正实现多入口、多出口要写成对象的方式
   */
  // entry: ['./src/index.js', 'src/login.js'], // 1.
  // entry: {                                    // 2.
  //   index: './src/index.js',
  //   login: './src/login.js',
  // },
  output: {
    // filename: 'bundle.js', // 打包的文件名称
    // 添加文件可以防止文件缓存，每次都会生成四位的hash串
    filename: 'bundle.[hash:4].js',
    // 多入口文件：[name]就可以将入口文件名和出口文件名一一对应
    // filename: '[name].js', // 打包后会生成 'index.js'和'login.js'
    path: path.resolve('dist'), // 打包后的目录，必须是绝对路径
  },
  plugins: [
    // 通过new这个类来使用插件
    new HtmlWebpackPlugin({
      /**
       * 用哪个html作为模板
       * 在scr目录下创建index.html当做模板来用
       */
      template: './src/index.html',
      hash: true, // 会在打包好的bundle.js后面加上hash串
    }),

    // 多页面开发配置多页面
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'index.html',
    //   chunks: ['index']  // 设置对应关系，index.html对应的时index.js
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/login.html',
    //   filename: 'login.html',
    //   chunks: ['login']  // 设置对应关系，login.html对应的时login.js
    // })

    // 拆分后会将css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin('css/style.css'),
    // 引用该插件即可为
    require('autoprefixer'),
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/, // 解析css
      //   // use: ['style-loader', 'css-loader'],
      //   use: ExtractTextWebpackPlugin.extract({
      //     // 将css用link方式引入就不再需要style-loader
      //     use: 'css-loader',
      //     publicPath: '../'
      //   })
      //   /**
      //    * 也可以这样写，方便写配置参数
      //    * use:[
      //    *    {loader:'style-loader'},
      //    *    {loader: 'css-loader'},
      //    * ]
      //    */
      // },
      // {
      //   test: /\.less$/, // 解析less
      //   // use: [
      //   //   { loader: 'style-loader' },
      //   //   { loader: 'css-loader' },
      //   //   { loader: 'less-loader' }
      //   // ],
      //   use: ExtractTextWebpackPlugin.extract({
      //     use: ['css-loader', 'less-loader'],
      //   })
      // },
      {
        test: /\.(less|css)$/, // 解析less和css
        use: ExtractTextWebpackPlugin.extract({
          // 配置postcss-loader
          use: ['css-loader', 'less-loader', 'postcss-loader'],
          publicPath: '../' // 背景图片的相对路径
        })
      },
      // 背景图片引用
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于8k的图片自动转换为base64格式，并且不会存在实体图片
              outputPath: 'images/' // 图片打包后的路径
            }
          }
        ]
      },
      // 页面img引用,页面图片也是放到了dist/images下
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      // 字体图标和svg,如果img也是svg格式的话配合html-withimg-loader也没问题
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      },
    ]
  },
  mode: 'development', // 模式配置
}
