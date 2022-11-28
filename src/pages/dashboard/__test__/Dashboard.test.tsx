import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'

import Dashboard from '..'

describe('Dashboard', () => {
  it('text test', async () => {
    const btnText = 'click m'
    render(<Dashboard />)
    await userEvent.click(screen.getByText(btnText))
    expect(screen.getByText('text222').textContent).toBe('text222')
  })
})
