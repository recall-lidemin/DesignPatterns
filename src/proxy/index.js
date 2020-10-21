// 代理模式
class LoadImg {
  constructor(fileName) {
    this.fileName = fileName
  }
  loadDisk() {
    console.log(`${this.fileName}加载中`)
  }
  display() {
    console.log(`${this.fileName}已展示`)
  }
}

class LoadProxy {
  constructor(fileName) {
    this.proxy = new LoadImg(fileName)
  }
  display() {
    this.proxy.display()
  }
}

let proxy = new LoadProxy('1.png')
proxy.display()

// 应用场景
// 1.网页事件代理(事件委托)
// 2.jQuery $.proxy
// 3.ES6 Proxy
