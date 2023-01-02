import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import UnitTest from '..'

describe('UnitTest Component', () => {
  let inputEl: HTMLInputElement
  let passEl: HTMLInputElement
  let button: HTMLButtonElement

  beforeEach(() => {
    render(<UnitTest />)
    inputEl = screen.getByPlaceholderText(/username/i)
    passEl = screen.getByPlaceholderText(/password/i)
    button = screen.getByText('click')
  })

  it('username input should be rendered', () => {
    expect(inputEl).toBeInTheDocument()
  })

  it('password input should be rendered', () => {
    expect(passEl).toBeInTheDocument()
  })
})
