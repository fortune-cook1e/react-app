import Counter from '../instance'

describe('Singleton Counter Test', () => {
  it('incrementing 1 time should be 1', () => {
    Counter.increment()
    expect(Counter.getCount()).toBe(1)
  })
})
