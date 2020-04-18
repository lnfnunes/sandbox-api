const { AppError } = require('../../src/models')

describe('models::error', () => {
  it('Should return an Internal Server Error (500) as default error', () => {
    const result = AppError.create()

    const expected = {
      code: 500,
      message: 'Server Error',
    }

    expect(result).toEqual(expected)
  })

  it('Should return a Page Not Found (404) error', () => {
    const result = AppError.create(404)

    const expected = {
      code: 404,
      message: expect.any(String),
    }

    expect(result).toEqual(expected)
  })
})
