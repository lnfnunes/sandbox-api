const { mockRequest, mockResponse } = require('mock-req-res')

const middleware = require('../../middlewares')

describe('middlewares::logger', () => {
  it('Should log the request', async () => {
    const spyNext = jest.fn()
    await middleware(mockRequest(), mockResponse(), spyNext)

    expect(spyNext).toHaveBeenCalled()
  })
})
