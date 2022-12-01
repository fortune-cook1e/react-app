import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import UnitTest from '..'

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        data: {
          list: [
            {
              id: 1,
              name: 'jon'
            }
          ]
        }
      }
    })
  }
}))

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

  it('test click', async () => {
    render(<UnitTest />)
    const testValue = 'test'
    fireEvent.change(inputEl, { target: { value: testValue } })
    fireEvent.change(passEl, { target: { value: testValue } })
    expect(inputEl.value).toBe(testValue)
    expect(passEl.value).toBe(testValue)
    fireEvent.click(button)
    await waitFor(() => {
      const listItemEl = screen.getByRole('list-item')
      expect(listItemEl).toBeInTheDocument()
    })
  })
})
