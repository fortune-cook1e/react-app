import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import UserTestForm from '../components/UserTestForm'

describe('User Test Form', () => {
  const mockSuccess = jest.fn()

  const inputPlaceholderText = 'user form placeholder'
  const buttonText = 'user form click'

  beforeEach(() => {
    render(<UserTestForm onSubmitSuccess={mockSuccess} />)
  })

  it('Should call submit success function ', async () => {
    user.type(screen.getByPlaceholderText(inputPlaceholderText), 'gagaga')

    await user.click(screen.getByText(buttonText))

    expect(mockSuccess).toHaveBeenCalled()
  })
})
