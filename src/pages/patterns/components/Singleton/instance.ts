let instance: any
let counter = 0

// 单例模式的缺点: 1. 全局污染 2. 值容易被修改并且影响到全局

class Counter {
  constructor() {
    if (instance) {
      throw new Error('You can only create one instance!')
    }
    instance = this
  }

  getInstance(): Counter {
    return this
  }

  getCount(): number {
    return counter
  }

  increment(): number {
    return ++counter
  }

  decrement(): number {
    return --counter
  }
}

const singletonCounter = Object.freeze(new Counter())
export default singletonCounter
