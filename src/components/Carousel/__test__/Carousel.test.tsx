import { fireEvent, render, screen, waitFor, act } from '@testing-library/react'
import { CSSProperties, useRef } from 'react'

import Carousel from '@/components/Carousel'

const imgs = [
  'https://images.unsplash.com/photo-1562886877-aaaa5c0b3225?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ',
  'https://images.unsplash.com/photo-1572652963245-bd7fda887078?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ',
  'https://images.unsplash.com/photo-1572656934803-d2162b2e98bf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk5Mjc0fQ'
]

/**
 * @param advanceTime Default 1000
 * @param times Default 20
 */
export async function waitFakeTimer(advanceTime = 1000, times = 20): Promise<void> {
  for (let i = 0; i < times; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await act(async () => {
      await Promise.resolve()

      if (advanceTime > 0) {
        jest.advanceTimersByTime(advanceTime)
      } else {
        jest.runAllTimers()
      }
    })
  }
}

const divStyle: CSSProperties = {
  height: '400px',
  background: '#364d79'
}

const imgStyle: CSSProperties = {
  width: '100%',
  height: '100%'
}

describe('Carousel Test', () => {
  beforeEach(() => {
    render(
      <Carousel autoplay={false}>
        {imgs.map((img: string, index: number) => (
          <div style={divStyle} key={index}>
            <img src={imgs[index]} style={imgStyle} alt={img} data-testid='img' />
          </div>
        ))}
      </Carousel>
    )
  })
  it('Carousel Visible test', async () => {
    expect(await screen.findByTestId('carousel')).toBeVisible()
  })

  it('Slide Count test', async () => {
    const slideContentCount = imgs.length
    const result = await screen.findAllByTestId('img')
    expect(result).toHaveLength(slideContentCount)
  })

  it('Click test', async () => {
    const allPaginationItems = await screen.findAllByTestId('pagination-item')
    fireEvent.click(allPaginationItems[0])
    await waitFor(async () => {
      expect(await screen.findByAltText(imgs[2])).toBeVisible()
    })
  })
})
