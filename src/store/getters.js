// 快捷访问

const getters = {
  token: (state) => state.user.token,
  /**
   * @description 判断用户资料是否存在
   * @param {*} state 状态
   * @returns true 表示用户信息存在，false 表示用户信息不存在
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
