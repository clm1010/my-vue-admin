import { createStore } from 'vuex'
import user from './modules/user'
import getters from './getters'

/**
 * @description 创建store
 * @returns {Object} store
 */
export default createStore({
  // 注册getters
  getters,
  // 注册模块
  modules: {
    user
  }
})
