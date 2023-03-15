const Item = ({ i }: { i: number }) => {
  for (let i = 0; i < 999999; i++) {
    return (
      <span
        key={i}
        style={{
          display: 'inline-block',
          width: '5px',
          height: '5px',
          backgroundColor: `rgb(${255 * Math.random()},${255 * Math.random()},${
            255 * Math.random()
          })`
        }}
      />
    )
  }
}

const PlayGround = (): JSX.Element => {
  return (
    <section>
      <h1>this is play ground</h1>
      <div className='space-y-px-5'>
        <span className='block'>1</span>
        <span className='block'>2</span>
        <span className='block'>3</span>
      </div>

      <div>gagaga</div>
      <div style={{ marginTop: '10px' }}>2321312</div>
    </section>
  )
}

export default PlayGround
