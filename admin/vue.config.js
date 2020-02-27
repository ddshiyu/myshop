module.exports = {
  lintOnSave: true,
  // 静态文件的路径
  publicPath: process.env.NODE_ENV === 'production'? '/admin': '/'
}