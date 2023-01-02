const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American'
}

// 代理模式：
// advantages:
// 1. 对象的行为添加控制
// 2. 校验、格式化、debug、通知等

// disvantages:
// 1. 性能影响
const personProxy = new Proxy(person, {
  get: (obj: any, prop: string) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
  },
  set: (obj: any, prop: string, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
    return Reflect.set(obj, prop, value)
  }
})

export default personProxy
