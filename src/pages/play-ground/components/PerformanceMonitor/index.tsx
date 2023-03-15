const Item = ({ i }: { i: number }) => {
  for (let i = 0; i < 999999; i++) {}
  return (
    <span
      key={i}
      className='w-2 h-2 inline-block'
      style={{
        backgroundColor: `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`
      }}
    />
  )
}

const PerformanceMonitor = () => {
  const n = 8000
  return (
    <div style={{ fontSize: 0 }}>
      {[...new Array(n)].map((_, i) => {
        return <Item i={i} key={i} />
      })}
    </div>
  )
}

export default PerformanceMonitor
