import useDogs from './useDogs'

const DogImages = (): JSX.Element => {
  const { dogs } = useDogs()
  return (
    <>
      {dogs.map((dog, i) => (
        <img src={dog} key={i} alt='Dog' />
      ))}
    </>
  )
}

export default DogImages
