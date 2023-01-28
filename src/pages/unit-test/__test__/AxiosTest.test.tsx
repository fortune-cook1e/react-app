import { render, screen } from '@testing-library/react'

import AxiosTest from '../components/AxiosTest'
import { _fetchStaffList } from '../components/AxiosTest'

import { fetchStaffList } from '@/apis/staff'

describe('Axios Test', () => {
  beforeEach(() => {
    // render(<AxiosTest />)
  })

  it('Test Loading', () => {
    ;(_fetchStaffList as jest.Mock).mockResolvedValue({
      data: {
        list: [
          {
            id: '123',
            name: '123'
          }
        ]
      }
    })
    render(<AxiosTest />)
    expect(screen.findByText('loading')).toBeInTheDocument()
  })
})
