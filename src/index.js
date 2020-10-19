// 继承
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} eating something`;
  }
  speak() {
    return `${this.name} speak something`;
  }
}

class Student extends People {
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }
  study() {
    console.log(`${this.name}学习`);
  }
}

let xiaoming = new Student("小明", 18, 2012);
xiaoming.study();
console.log(xiaoming.eat());

// 封装
// 多态

// 面向对象-JQuery
class JQuery {
  constructor(selector) {
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0;
    for (let i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || "";
  }
  append(node) {}
  addClass(name) {}
  html(data) {}
}

window.$ = function (selector) {
  return new JQuery(selector);
};

var a = $("p");
console.log(a);
