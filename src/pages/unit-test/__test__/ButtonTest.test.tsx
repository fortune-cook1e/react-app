import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import ButtonTest from '../components/ButtonTest'

describe('ButtonTest', () => {
  it('Should handle click', async () => {
    const text = 'click here'
    const testOnClick = jest.fn()

    render(<ButtonTest onClick={testOnClick}>{text}</ButtonTest>)

    await user.click(screen.getByText(text))

    expect(testOnClick).toBeCalledTimes(1)
  })
})
