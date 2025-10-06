/**
 * @description 存储数据
 * @param {*} key 键
 * @param {*} value 值
 */
export const setItem = (key, value) => {
  // value 分为两种情况，
  // 1. 基本数据类型
  // 2. 复杂数据类型（对象、数组）
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * @description 获取数据
 * @param {*} key 键
 * @returns 值
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  // 如果data是JSON字符串，则解析为对象
  console.log(data)
  try {
    return JSON.parse(data)
  } catch (err) {
    console.log(err)
    return data
  }
}

/**
 * @description 删除指定数据
 * @param {*} key 键
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * @description 删除所有数据
 */
export const clear = () => {
  window.localStorage.clear()
}
