import { render, screen } from '@testing-library/react'

import ButtonTest from '../components/ButtonTest'
import NestedCmp from '../components/NestedCmp'

jest.mock('../components/ButtonTest')
;(ButtonTest as jest.Mock).mockReturnValue(<button />)

describe('NestedCmp Test', () => {
  const userTitle = 'user-title'
  beforeEach(() => {
    render(<NestedCmp title={userTitle} />)
  })

  it('Should display the correct title', () => {
    expect(screen.getByText(userTitle)).toBeInTheDocument()
  })
})
