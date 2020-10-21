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
let star = {
  name: '张XX',
  age: 25,
  phone: '1390000011',
}

let agent = new Proxy(star, {
  get: (target, key) => {
    if (key === 'phone') {
      // 返回经纪人电话
      return '1866666666'
    }
    if (key === 'price') {
      return 120000
    }
    return target[key]
  },
  set: (target, key, val) => {
    if (key === 'customPrice') {
      if (val < 100000) {
        throw Error('价格太低')
      } else {
        target[key] = val
        return true
      }
    }
  },
})

console.log(agent.name)
console.log(agent.phone)
console.log(agent.price)
console.log((agent.customPrice = 900000))
console.log((agent.customPrice = 90000))
