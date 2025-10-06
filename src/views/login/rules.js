export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码!'))
    } else if (value.length < 6) {
      callback(new Error('密码长度不能小于6位!'))
    } else {
      callback()
    }
  }
}
