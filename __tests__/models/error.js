const errorVO = require('../../models/error')

describe('models::error', () => {
  it('Should return an Internal Server Error (500) as default error', () => {
    const result = errorVO()
    const expected = expect.objectContaining({
      code: 500,
      message: expect.any(String),
    })

    expect(result).toEqual(expected)
  })

  it('Should return a Page Not Found (404) error', () => {
    const result = errorVO(404)
    const expected = expect.objectContaining({
      code: 404,
      message: expect.any(String),
    })

    expect(result).toEqual(expected)
  })
})
