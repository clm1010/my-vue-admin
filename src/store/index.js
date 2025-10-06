import { createStore } from 'vuex'
import user from './modules/user'

/**
 * @description 创建store
 * @returns {Object} store
 */
export default createStore({
  // 注册模块
  modules: {
    user
  }
})
