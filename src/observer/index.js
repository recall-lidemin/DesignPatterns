// 观察者模式
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers() {
    this.observers.forEach((observer) => {
      observer.update()
    })
  }
  attach(observer) {
    this.observers.push(observer)
  }
}

class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)
  }
  update() {
    console.log(`${this.name}观察者被触发update,state:${this.subject.state}`)
  }
}

let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('o2', s)
let o3 = new Observer('o3', s)

s.setState(1)
s.setState(2)
s.setState(3)

// 应用场景
// 网页事件绑定
// Promise
// jQuery callbacks
// nodejs自定义事件
// 其他：vue、React生命周期、node多进程、Vue watch

// 主题和观察者分离，不是主动触发，而是被动监听，两者解耦
// 符合开放封闭原则
