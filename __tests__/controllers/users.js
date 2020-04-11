const { mockRequest, mockResponse } = require('mock-req-res')
const _ = require('lodash')

const usersController = require('../../controllers').users

let req
let res
let spyStatus
let spyResponse
beforeEach(() => {
  req = mockRequest()
  res = mockResponse()
  spyStatus = jest.spyOn(res, 'status')
  spyResponse = jest.spyOn(res, 'json')
})

describe('/v1/users', () => {
  it('Should return a list of users', async () => {
    await usersController.getUsers(req, res)

    const expectedStatus = 200
    const expectedResponse = {
      users: _.times(3, (id) =>
        expect.objectContaining({
          id,
          name: expect.any(String),
        }),
      ),
    }

    expect(spyStatus).toHaveBeenCalledWith(expectedStatus)
    expect(spyResponse).toHaveBeenCalledWith(expectedResponse)
  })
})

describe('/v1/user/7', () => {
  it('Should return a single user', async () => {
    req.params.userId = 7
    await usersController.getUser(req, res)

    const expectedStatus = 200
    const expectedResponse = expect.objectContaining({
      id: 7,
      name: expect.any(String),
    })

    expect(spyStatus).toHaveBeenCalledWith(expectedStatus)
    expect(spyResponse).toHaveBeenCalledWith(expectedResponse)
  })
})

describe('/v1/user/0', () => {
  it('Should return an Internal Server Error', async () => {
    req.params.userId = 0
    await usersController.getUser(req, res)

    const expectedStatus = 500
    const expectedResponse = expect.objectContaining({
      code: expect.any(Number),
      message: expect.any(String),
    })

    expect(spyStatus).toHaveBeenCalledWith(expectedStatus)
    expect(spyResponse).toHaveBeenCalledWith(expectedResponse)
  })
})
