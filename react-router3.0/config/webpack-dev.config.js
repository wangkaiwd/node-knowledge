const path = require('path')

module.exports = {
  // 方便调试，不会在浏览器中将es6转换为es5
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, '../dist'),
    // 一切服务都启用gzip 压缩
    compress: true,
    hot: true,
    inline: true,
    // 服务器外部可访问
    host: 'localhost',
    open: true,
    // 控制输出信息
    stats: {
      all: false,
      // 添加资源信息
      assets: true,
      errors: true,
      timings: true,
      version: true,
      warnings: false,
      colors: true
    },
    // 将错误显示到页面上
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
