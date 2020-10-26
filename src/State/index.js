// 状态模式
class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color}`)
    context.setState(this)
  }
}

class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}

let red = new State('red')
let green = new State('green')
let yellow = new State('yellow')

let rv = new Context()
red.handle(rv)
