const userVO = require('../../models/user')

describe('models::user', () => {
  it('Should return a user with id 0 as default', () => {
    const result = userVO()
    const expected = expect.objectContaining({
      id: 0,
      name: expect.any(String),
    })

    expect(result).toEqual(expected)
  })

  it('Should return a user with specific id', () => {
    const result = userVO(7)
    const expected = expect.objectContaining({
      id: 7,
      name: expect.any(String),
    })

    expect(result).toEqual(expected)
  })
})
