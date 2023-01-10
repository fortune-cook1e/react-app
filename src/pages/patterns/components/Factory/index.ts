const createObjectFromArray = ([key, value]: [string, string]): Record<string, string> => ({
  [key]: value
})

createObjectFromArray(['name', 'John']) // { name: "John" }

export default createObjectFromArray
