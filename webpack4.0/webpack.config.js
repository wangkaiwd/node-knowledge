/*
 * @Author: wangkai
 * @Date: 2018-04-28 22:01:14
 * @Last Modified by: wangkai
 * @Last Modified time: 2018-05-03 10:10:43
 * @Desc: webpack从零配置
 */
const path = require('path');

const webpack = require('webpack');

// 插件都是一个类，命名时尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 每次打包之前将dist目录下的文件都清空，然后把打好包的文件都放进去
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
    // filename: 'bundle.[hash:4].js',
    // 多入口文件：[name]就可以将入口文件名和出口文件名一一对应
    filename: '[name].[hash:4].js', // 打包后会生成 'index.js'和'login.js'
    path: path.resolve('dist'), // 打包后的目录，必须是绝对路径
  },
  plugins: [
    // 通过new这个类来使用插件
    new HtmlWebpackPlugin({
      /**
       * 用哪个html作为模板
       * 在scr目录下创建index.html当做模板来用
       */
      template: './index.html',
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
    // }),

    // 拆分后会将css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin('css/style.css'),

    // 打包前先清空前一次打包好的文件
    new CleanWebpackPlugin('dist'),

    // webpack自带插件进行热替换，热替换不是刷新
    new webpack.HotModuleReplacementPlugin(),
  ],
  // 将第三方插件和自己写的js进行一个分离
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: { // 抽离第三方插件
          test: /node_modules/, // 指定node_modules下的第三方包
          chunks: 'initial',
          name: 'vendor', // 打包后的文件名，任意命名
          // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
          priority: 10,
        },
        utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
          chunks: 'initial',
          name: 'utils', // 任意名
          minSize: 0, // 只要超出0字节就生成一个新包
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 解析css
        use: ['style-loader', 'css-loader'],
        // use: ExtractTextWebpackPlugin.extract({
        //   // 将css用link方式引入就不再需要style-loader
        //   use: ['style-loader', 'css-loader'],
        //   publicPath: '../',
        // }),
        /**
         * 也可以这样写，方便写配置参数
         * use:[
         *    {loader:'style-loader'},
         *    {loader: 'css-loader'},
         * ]
         */
      },
      {
        test: /\.less$/, // 解析less
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ],
        // use: ExtractTextWebpackPlugin.extract({
        //   use: ['css-loader', 'less-loader'],
        // }),
      },
      // {
      //   test: /\.(less|css)$/, // 解析less和css
      //   use: ExtractTextWebpackPlugin.extract({
      //     // 配置postcss-loader
      //     use: ['css-loader', 'less-loader', 'postcss-loader'],
      //     publicPath: '../' // 背景图片的相对路径
      //   })
      // },
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
      {
        test: /.js$/,
        use: 'babel-loader',
        include: /src/,  // 只转换src目录下的js
        exclude: /node_modules/, // 排除掉node_modules,优化打包速度
      }
    ]
  },
  // 通过devServer打包的文件存在于内存中，并不会产生在dist目录下
  devServer: {
    contentBase: './dist',
    host: 'localhost', // 默认时localhost
    port: 3000, // 端口
    open: true, // 自动打开浏览器
    hot: true,  // 开启热更新
  },
  /**
   * 热更新：
   * 1. devServer： hot:true,
   * 2. wedpack自带插件
   * 3. 在主要js文件里检查是否有module.hot
   * if(module.hot) {
   *  // 实现热更新
   *  module.hot.accept();
   * }
   */

  // resolve解析：1. 配置别名，2. 省略后缀
  resolve: {
    // 1. 配置别名，方便路径引入
    alias: {
      // src: "./src/", // 相对路径配置
      // src: path.resolve('src'), // 绝对路径配置
      component: path.resolve(__dirname, 'src/component'),
      style: path.resolve(__dirname, 'src/style'),
      src: path.resolve(__dirname, 'src'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'assets'),
    },
    // 省略后缀
    extensions: ['.js', '.json', '.css', '.less'],
  },
  mode: 'development', // 模式配置
}
