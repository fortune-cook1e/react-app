type Observer = (args?: any) => any

class Observable {
  observers: Observer[]
  constructor() {
    this.observers = []
  }

  subscribe(func: Observer) {
    this.observers.push(func)
  }

  unsubscribe(func: Observer) {
    this.observers = this.observers.filter(o => o !== func)
  }

  notify(data?: any) {
    this.observers.forEach(o => o(data))
  }
}

export default new Observable()
