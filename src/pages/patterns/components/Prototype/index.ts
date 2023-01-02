class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark(): void {
    console.log('woo~')
  }
}

class SuperDog extends Dog {
  constructor(name: string) {
    super(name)
  }

  fly(): string {
    return 'Flying!'
  }
}

const dog = {
  bark() {
    return `Woof!`
  }
}

const pet1 = Object.create(dog)

export default Dog
