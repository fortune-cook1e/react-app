/**
 * Defines the function type for the subscription callback. Ensures
 * the message payload is a valid property of the event being used.
 */
type MessageFn<E> = <Key extends string & keyof E>(message: E[Key]) => void

type Callback = (args: any) => any

class PubSub {
  handlers: { [key: string]: MessageFn<any>[] } = {}

  constructor() {
    this.handlers = {}
  }

  publish(eventName: string, msg?: string) {
    this.handlers[eventName].forEach(h => h(msg))
  }

  subscribe(eventName: string, callback: Callback) {
    const list = this.handlers[eventName] || []
    list.push(callback)
    this.handlers[eventName] = list
  }

  unsubscribe(eventName: string, callback: Callback) {
    let list = this.handlers?.[eventName] || []
    list = list.filter(h => h !== callback)
    this.handlers[eventName] = list
  }
}

export default new PubSub()
