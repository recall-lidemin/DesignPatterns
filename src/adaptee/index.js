// 适配器模式
class Adaptee {
  specifiRequest() {
    return '德国标准'
  }
}
class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specifiRequest()
    console.log(`${info}转换为中国标准`)
  }
}

// 测试
let china = new Target()
china.request()

// 应用场景
// 1.封装旧接口
// 在Jquery中，大量存在 $.ajax({})如果想全局替换,可以做一层适配器，就不必去全局改代码了
const $ = {
  ajax: (option) => {
    return ajax(option)
  },
}
// 2.vue computed
// 计算属性接收旧数据，转换新数据返回
// 符合开放封闭原则
