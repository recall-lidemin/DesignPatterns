// 装饰器模式
// 为对象添加新功能
// 不改变原有的结构和功能
class Circle {
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }
  setRedBorder(circle) {
    console.log('设置红色边框')
  }
}

let circle = new Circle()
circle.draw()
let dec = new Decorator(circle)
dec.draw()

// 应用场景
// ES7 装饰器
@testDec
class Demo {}

function testDec(target) {
  target.isDec = true
}
console.log(Demo.isDec)
// core-decorators（第三方库）
