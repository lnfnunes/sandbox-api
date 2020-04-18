const { User } = require('../../src/models')

describe('models::user', () => {
  it('Should return a user with id 0 as default', () => {
    const result = User()
    const expected = expect.objectContaining({
      id: '0',
      name: expect.any(String),
    })
    expect(result).toEqual(expected)
  })

  it('Should return a user with specific id', () => {
    const result = User(7)
    const expected = expect.objectContaining({
      id: '7',
      name: expect.any(String),
    })
    expect(result).toEqual(expected)
  })
})
