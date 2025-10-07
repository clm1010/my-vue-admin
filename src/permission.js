import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']

/**
 * @description 路由前置守卫
 * @param {*} to 目标路由
 * @param {*} from 来源路由
 * @param {*} next 下一步
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // if (store.state.user.token) {
  // 快捷访问
  if (store.getters.token) {
    // 用户已登录，则不允许进入 login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
