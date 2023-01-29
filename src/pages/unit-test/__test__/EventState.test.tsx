import { screen, render, fireEvent, waitFor } from '@testing-library/react'

import EventState from '../components/EventState'

describe('EventState Test', () => {
  beforeEach(() => {
    render(<EventState />)
  })

  it('test Button click', () => {
    const btnText = 'event state button'

    // Tip: 针对 state 变化可以采用如下方式
    fireEvent.click(screen.getByText(btnText))
    waitFor(() => {
      expect(screen.findByText('state')).toBeInTheDocument()
    })
  })
})
