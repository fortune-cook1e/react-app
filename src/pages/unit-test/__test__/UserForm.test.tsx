import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserForm from '../components/UserForm'

describe('UserForm Test', () => {
  const usernamePlaceholderText = 'Please input username'
  const passwordPlaceholderText = 'Please input password'
  const submitBtnText = 'submit form'

  const usernameErrorText = 'Username is required!'

  beforeEach(() => {
    render(<UserForm />)
  })

  it('form visible test', () => {
    expect(screen.getByPlaceholderText(usernamePlaceholderText)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(passwordPlaceholderText)).toBeInTheDocument()
  })

  it('validate test', async () => {
    await userEvent.type(screen.getByPlaceholderText(usernamePlaceholderText), 'username')
    await userEvent.type(screen.getByPlaceholderText(passwordPlaceholderText), 'password')
    userEvent.click(screen.getByText(submitBtnText))
    waitFor(() => {
      expect(screen.getByText(usernameErrorText)).not.toBeVisible()
    })
  })
})
