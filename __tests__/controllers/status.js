const { mockRequest, mockResponse } = require('mock-req-res')

const statusController = require('../../src/controllers').status

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

describe('/status', () => {
  it('Should return a list of users', async () => {
    await statusController.getStatus(req, res)

    const expectedStatus = 200
    const expectedResponse = {
      status: 'UP',
    }

    expect(spyStatus).toHaveBeenCalledWith(expectedStatus)
    expect(spyResponse).toHaveBeenCalledWith(expectedResponse)
  })
})
