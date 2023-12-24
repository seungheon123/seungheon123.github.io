
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/seungheon123/'  // GitHub Pages 경우
    : '/',
  transpileDependencies: true
}
