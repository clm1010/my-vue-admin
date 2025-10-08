const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // webpack devServer 提供了代理的功能，该 代理可以把所有请求到当前服务中的请求，转发（代理）到另外一个服务器上
  devServer: {
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址  这里不用写 api
        target: 'https://api.imooc-admin.lgdsunday.club/',
        // target: 'http://127.0.0.1:3004/',
        changeOrigin: true // 是否跨域
      }
    }
  },
  chainWebpack(config) {
    // config.module 表示创建一个具名规则，以后用来修改规则
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      // 规则
      .rule('icons')
      // 正则，解析 .svg 格式文件
      .test(/\.svg$/)
      // 解析的文件
      .include.add(resolve('src/icons'))
      // 结束
      .end()
      // 新增了一个解析的loader
      .use('svg-sprite-loader')
      // 具体的loader
      .loader('svg-sprite-loader')
      // loader 的配置
      .options({
        symbolId: 'icon-[name]'
      })
      // 结束
      .end()

    // 新增规则，处理 element-plus 2 错误
    config.module
      .rule('element-plus-2')
      .test(/\.mjs$/)
      .type('javascript/auto')
      .include.add(/node_modules/)
      .end()
  }
}
