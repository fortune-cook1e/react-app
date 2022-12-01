import { render, screen } from '@testing-library/react'

import UnitTest from '..'

describe('UnitTest Component', () => {
  it('render success', () => {
    const comp = render(<UnitTest />)
    const pText = screen.getByText(/haha/)
    // const el = comp.container.querySelector('div')
    // expect(el).toBeUndefined()
  })
})
