import '@testing-library/jest-dom'

// FIXBUG: https://annacoding.com/article/3XVDQn2H5BDX6H1RuyzaQO/Jest-test-fails-:-TypeError:-window.matchMedia-is-not-a-function
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
})
