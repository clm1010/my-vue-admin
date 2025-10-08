import request from '@/utils/request'

/**
 * @description 登录
 * @param {*} data 请求参数
 * @returns Promise 返回结果
 */
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

/**
 * @description 获取用户信息
 * @returns Promise 返回结果
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'get'
  })
}
