const _ = require('lodash')
const faker = require('faker')
const request = require('supertest')

const server = require('../../src/server')

describe('[GET] /users', () => {
  it('Should return a list of 6 users', async () => {
    const payload = {}
    const result = await request(server).get('/users').send(payload)

    const expected = {
      statusCode: 200,
      body: {
        users: _.times(6, (id) =>
          expect.objectContaining({
            id: `${id}`,
            name: expect.any(String),
          }),
        ),
      },
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
  })
})

describe('[GET] /users/7', () => {
  it('Should return a single user', async () => {
    const userId = 7
    const payload = {}
    const result = await request(server).get(`/users/${userId}`).send(payload)

    const expected = {
      statusCode: 200,
      body: expect.objectContaining({
        id: '7',
        name: expect.any(String),
      }),
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
  })

  it('Should return an User Not Found (404) error', async () => {
    const userId = -1
    const payload = {}
    const result = await request(server).get(`/users/${userId}`).send(payload)

    const expected = {
      statusCode: 404,
      body: expect.objectContaining({
        code: '001',
        message: 'User Not Found!',
      }),
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
  })

  it('Should return an Internal Server Error (500) error', async () => {
    const userId = 0
    const payload = {}
    const result = await request(server).get(`/users/${userId}`).send(payload)

    const expected = {
      statusCode: 500,
      body: expect.objectContaining({
        code: 500,
        message: 'Server Error',
      }),
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
  })
})

describe('[POST] /users', () => {
  it('Should return User Created (201)', async () => {
    const headers = {
      authorization: faker.random.uuid(),
    }
    const payload = {
      id: faker.random.uuid(),
    }
    const result = await request(server).post('/users').set(headers).send(payload)

    const expected = {
      statusCode: 201,
      body: '',
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
  })

  it('Should return Bad Request (400)', async () => {
    const headers = {
      authorization: faker.random.uuid(),
    }
    const payload = {}
    const result = await request(server).post('/users').set(headers).send(payload)

    const expected = {
      statusCode: 400,
      body: {
        code: 400,
        message: 'Bad Request',
      },
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
  })

  it('Should return Unauthorized (401)', async () => {
    const headers = {}
    const payload = {}
    const result = await await request(server).post('/users').set(headers).send(payload)

    const expected = {
      statusCode: 401,
      body: {
        code: 401,
        message: 'Unauthorized',
      },
    }

    expect(result.statusCode).toEqual(expected.statusCode)
    expect(result.body).toEqual(expected.body)
  })
})
