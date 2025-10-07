import router from '@/router'
import { login } from '@/api/sys'
import Md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
/**
 * @description 用户模块
 */
export default {
  // 命名空间 表示该模块是独立的状态管理
  namespaced: true,
  state: () => ({
    // 自动登录 从本地存储中获取token 如果获取不到，则默认为空字符串
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     * @description 登录请求动作
     * @param {*} context 上下文
     * @param {*} userInfo 用户信息
     * @returns Promise 返回结果
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password: Md5(password) })
          .then((res) => {
            console.log(res)
            context.commit('setToken', res.token)
            // this.commit('user/setToken', res.data.data.token)
            // 跳转至首页
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
