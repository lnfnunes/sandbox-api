const request = require('supertest')

const server = require('../../src/server')

describe('/', () => {
  it('Should return server status', async (done) => {
    const payload = {}
    const result = await request(server).get('/').send(payload)

    const expected = {
      statusCode: 200,
      body: {
        status: 'UP',
      },
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
    done()
  })
})

describe('/info', () => {
  it('Should return server status and version', async (done) => {
    const payload = {}
    const result = await request(server).get('/info').send(payload)

    const expected = {
      statusCode: 200,
      body: {
        status: 'UP',
        version: expect.any(String),
      },
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
    done()
  })
})

describe('/404', () => {
  it('Should return a Page Not Found (404) error', async (done) => {
    const payload = {}
    const result = await request(server).get('/404').send(payload)

    const expected = {
      statusCode: 404,
      body: {
        code: 404,
        message: expect.any(String),
      },
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
    done()
  })
})
