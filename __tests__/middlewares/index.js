const { mockRequest, mockResponse } = require('mock-req-res')

const middleware = require('../../src/middlewares')

describe('middlewares::logger', () => {
  it('Should log the request', async () => {
    global.console.log = jest.fn()
    const spyNext = jest.fn()
    await middleware(mockRequest(), mockResponse(), spyNext)

    expect(global.console.log).toHaveBeenCalled()
    expect(spyNext).toHaveBeenCalled()
  })
})
