import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  // 基础URL
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时时间
  timeout: 5000
})

/**
 * @description 请求拦截器
 * @param {*} config 配置
 * @returns 配置
 */
service.interceptors.request.use(
  (config) => {
    config.headers.icode = '89C51D7EDCA7D6D0'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * @description 响应拦截器
 * @param {*} response 响应
 * @returns 响应
 */
service.interceptors.response.use(
  // 成功 处理返回数据
  (response) => {
    const { success, data, message } = response.data
    // 如果成功，则返回数据
    if (success) {
      // 成功（请求成功，业务成功），返回数据
      ElMessage.success(message) // 提示成功消息
      return data
    } else {
      // 失败（请求成功，业务失败），消息提示
      ElMessage.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  // 失败 处理错误
  (error) => {
    console.log(error)
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default service
