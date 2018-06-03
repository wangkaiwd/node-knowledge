const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
// gizp压缩
const CompressionPlugin = require('compression-webpack-plugin')
// 分离打包后的css文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../index.html'),
      // favicon: '../favicon.ico'会报错
      favicon: path.join(__dirname, '../favicon.ico')
    }),
    // 自动加载模块，而不必到处 import 或 require 。
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types'
    }),
    // 打包的css文件名
    new ExtractTextPlugin('main.css'),
    // 模块热替换插件:当开启HRM的时候使用该插件会显示模块的相对路径，建议用于开发环境
    new webpack.NamedModulesPlugin(),
    // 模块热替换：允许在运行时更新各种模块，而无需进行完全刷新。（简称：HMR）
    new webpack.HotModuleReplacementPlugin(),
    // 提供带 Content-Encoding 编码的压缩版的资源
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('.'),
      threshold: 10240,
      minRatio: 0.8
    }),
    // 减少文件大小
    new webpack.optimize.AggressiveMergingPlugin() //合并块
  ]
}
