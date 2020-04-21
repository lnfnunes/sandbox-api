const express = require('express')
const faker = require('faker')
const request = require('supertest')

const { useAuth } = require('../../src/middlewares')

const server = express()
const router = express.Router()
router.get('/secure', useAuth, (req, res) => res.status(200).json())
server.use(router)

describe('/secure', () => {
  it('Should return Unauthorized (401)', async () => {
    const headers = {}
    const payload = {}
    const result = await await request(server).get('/secure').set(headers).send(payload)

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

  it('Should return OK (200)', async () => {
    const headers = {
      authorization: faker.random.uuid(),
    }
    const payload = {}
    const result = await await request(server).get('/secure').set(headers).send(payload)

    const expected = {
      statusCode: 200,
    }

    expect(result.statusCode).toEqual(expected.statusCode)
  })
})
