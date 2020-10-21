// 工厂模式
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('init')
  }
  func1() {
    console.log('func1')
  }
  func2() {
    console.log('func2')
  }
}

// 创建工厂
class Creator {
  create(name) {
    return new Product(name)
  }
}

// 测试
let creator = new Creator()
let p = creator.create('p')
p.init()
p.func1()

// 应用案例1
class JQuery {
  constructor(selector) {
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(selector))
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  append(node) {}
  addClass(name) {}
  html(data) {}
}

window.$ = function (selector) {
  return new JQuery(selector)
}

// 应用案例2
class React {
  createElement() {}
}
class Vnode {
  constructor(tag, attrs, children) {
    this.tag = tag
    this.attrs = attrs
    this.children = children
  }
  // ...
}
React.createElement = function (tag, attrs, children) {
  return new Vnode(tag, attrs, children)
}
React.createElement('', null, 123)

// 应用案例3
// Vue的异步组件

// 设计原则验证
// 1.构造函数和创建者分离
// 2.符合开放封闭原则
