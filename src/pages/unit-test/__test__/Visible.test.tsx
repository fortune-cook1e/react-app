import { render, screen } from '@testing-library/react'

import Visible from '../components/Visible'

describe('Visible Test', () => {
  beforeEach(() => {
    render(<Visible />)
  })

  it('test text visible', async () => {
    expect(await screen.findByText('visible')).toBeVisible()
  })
})
