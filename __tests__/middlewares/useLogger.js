const request = require('supertest')

const server = require('../../src/server')

describe('/', () => {
  it('Should return server status', async () => {
    const payload = {}
    await request(server).get('/').send(payload)

    expect(global.console.log).toHaveBeenCalled()
  })
})
