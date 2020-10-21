//
const EventEmitter = require('events').EventEmitter

class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

let simon = new Dog('simon')
simon.on('bark', (info) => {
  console.log(info)
})

simon.emit('bark', 'simon--bark')
