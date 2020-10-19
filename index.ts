// 封装
// 减少耦合，不该外露的不外露
// 利用数据、接口的权限管理
// ES6目前不支持，一般认为 _ 开头的为private

class Person {
  name;
  age;
  protected weight;
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}

class Doctor extends Person {
  private girlfriend;
  constructor(name, age, weight, girlfriend) {
    super(name, age, weight);
    this.girlfriend = girlfriend;
  }
}
