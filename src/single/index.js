// 单例模式
// 1.系统中被唯一使用
// 2.一个类只有一个实例
class SingleObject {
  login() {
    console.log('登录中')
  }
}

SingleObject.getInstance = (() => {
  let instance
  return () => {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()

// 测试
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2) // true
console.log('-------------')
let obj3 = new SingleObject() // 由于js问腿无法完全控制
obj3.login()
console.log(obj1 === obj3) // false

// 应用场景
// 1.JQuery只有一个 $

// 2.模拟登录框
class LoginForm {
  constructor() {
    this.state = 'hide'
  }
  show() {
    if (this.state === 'show') {
      console.log('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示成功')
  }
  hide() {
    if (this.state === 'hide') {
      console.log('已经隐藏')
      return
    }
    this.state = 'hide'
    console.log('登录框隐藏成功')
  }
}
LoginForm.getInstance = (() => {
  let instance
  return () => {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()
let login1 = LoginForm.getInstance()
login1.show()
let login2 = LoginForm.getInstance()
login2.show()
console.log(login1 === login2) // true

// 3.其他: 购物车、vuex和redux中的store
