import { FC, useState } from 'react'

function Input(props: any) {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Temp in °C'
      />
      {props.render(value)}
    </>
  )
}

function Input2(props: any) {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Temp in °C'
      />
      {props.children(value)}
    </>
  )
}

function Kelvin({ value = 0 }) {
  return <div className='temp'>{value + 273.15}K</div>
}

function Fahrenheit({ value = 0 }) {
  return <div className='temp'>{(value * 9) / 5 + 32}°F</div>
}

const RenderProps: FC = () => {
  return (
    <div>
      <h3>this is render props pattern</h3>
      <Input
        render={(value: string) => (
          <>
            <Kelvin value={+value} />
            <Fahrenheit value={+value} />
          </>
        )}
      />

      <Input2>
        {(value: string) => (
          <>
            <Kelvin value={+value} />
            <Fahrenheit value={+value} />
          </>
        )}
      </Input2>
    </div>
  )
}

export default RenderProps
