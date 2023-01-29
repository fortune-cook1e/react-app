import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import Mock from '../components/Mock'

import { fetchStaffList } from '@/apis/staff'
jest.mock('@/apis/staff')

describe('Mock Test', () => {
  const btnText = 'fetch'
  const titleText = 'this is Mock Test'
  const loadingText = 'loading'

  beforeEach(() => {
    render(<Mock />)
  })

  it('Dom Visible Test', () => {
    expect(screen.getByText(btnText)).toBeVisible()
    expect(screen.getByText(titleText)).toBeVisible()
  })

  it('Loading Test', async () => {
    fireEvent.click(screen.getByText(btnText))

    await waitFor(() => {
      expect(screen.getByText(loadingText)).toBeInTheDocument()
    })
  })

  it('List shows successfully', async () => {
    ;(fetchStaffList as jest.Mock).mockResolvedValue({
      data: {
        list: [
          {
            name: '123',
            id: '123'
          }
        ]
      }
    })
    fireEvent.click(screen.getByText(btnText))

    await waitFor(() => {
      expect(screen.getByText('123')).toBeVisible()
    })
  })
})
