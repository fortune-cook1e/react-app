import { useState, useEffect } from 'react'

const useDogs = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breed/labrador/images/random/6')
      .then(res => res.json())
      .then(({ message }) => setDogs(message))
  }, [])

  return {
    dogs
  }
}

export default useDogs
