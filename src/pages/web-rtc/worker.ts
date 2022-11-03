onmessage = e => {
  console.log('gagagagaga')
  const [num1, num2] = e.data
  let sum = 0
  for (let i = num1; i < num2; i++) {
    sum += i
  }
  postMessage(sum)
}
