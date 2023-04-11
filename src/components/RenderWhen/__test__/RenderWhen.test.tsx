import { render, screen } from '@testing-library/react'

import RenderWhen from '..'

describe('RenderWhen Component Test', () => {
  it('test visibility', async () => {
    const text1 = 'text1'
    render(
      <RenderWhen>
        <RenderWhen.If isTrue>{text1}</RenderWhen.If>
      </RenderWhen>
    )

    expect(await screen.findByText(text1)).toBeVisible()
  })

  it('Limitation Test', async () => {
    const text1 = 'text1'
    const text2 = 'text2'
    const text3 = 'text3'

    const { getByText, queryByText } = await render(
      <RenderWhen limit={2}>
        <RenderWhen.If isTrue>
          <span>{text1}</span>
        </RenderWhen.If>
        <RenderWhen.If isTrue>
          <span>{text2}</span>
        </RenderWhen.If>
        <RenderWhen.If isTrue>
          <span>{text3}</span>
        </RenderWhen.If>
      </RenderWhen>
    )

    expect(getByText(text1)).toBeVisible()
    expect(getByText(text2)).toBeVisible()
    expect(queryByText(text3)).not.toBeInTheDocument()
  })
})
