import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

/**
 * @description 获取时间戳
 * @returns 时间戳
 */
export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}

/**
 * @description 设置时间戳
 */
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now())
}

/**
 * @description 是否超时
 * @returns 是否超时 true 表示超时，false 表示未超时
 */
export const isCheckTimeout = () => {
  // 当前时间戳
  const currentTime = Date.now()
  // 缓存时间
  const timeStamp = getTimeStamp()
  // 是否超时
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
