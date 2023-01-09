class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const dogFunctionality = {
  bark: () => console.log('woof~'),
  play: () => console.log('play~!')
}

const animalFunctionality = {
  walk: () => console.log('Walking!'),
  sleep: () => console.log('Sleeping!')
}

Object.assign(Dog.prototype, dogFunctionality)

Object.assign(dogFunctionality, animalFunctionality)

export default Dog
