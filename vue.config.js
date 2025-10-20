const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  // 设置静态资源基础路径，确保部署后能正确加载
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 输出目录
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: 'assets',
  // webpack devServer 提供了代理的功能，该 代理可以把所有请求到当前服务中的请求，转发（代理）到另外一个服务器上
  devServer: {
    port: port,
    open: true, // 自动打开浏览器
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
    config.plugin('define').tap((args) => {
      args[0] = Object.assign(args[0], {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: true,
        __INTLIFY_PROD_DEVTOOLS__: false
      })
      return args
    })

    // 设置 svg-sprite-loader
    // config 为 webpack 配置对象
    // config.module 表示创建一个具名规则，以后用来修改规则
    config.module
      // 规则
      .rule('svg')
      // 忽略
      .exclude.add(resolve('src/icons'))
      // 结束
      .end()
    // config.module 表示创建一个具名规则，以后用来修改规则
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
