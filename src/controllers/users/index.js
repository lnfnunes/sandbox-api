const _ = require('lodash')
const HttpStatus = require('http-status-codes')

const { User } = require('../../models')
const { validateGetUser, validateCreateUser } = require('./validate')

function getUsers(req, res) {
  res.status(HttpStatus.OK).json({
    users: _.times(6, User),
  })
}

function getUser(req, res) {
  const { userId } = req.params

  const validationError = validateGetUser(userId)
  if (validationError) {
    res.status(validationError.statusCode).json(validationError.body)
    return
  }

  res.status(HttpStatus.OK).json(User(userId))
}

function createUser(req, res) {
  const { body } = req

  const validationError = validateCreateUser(body)
  if (validationError) {
    res.status(validationError.statusCode).json(validationError.body)
    return
  }

  res.status(HttpStatus.CREATED).json()
}

module.exports = (router) => {
  router.get('/users', getUsers)
  router.get('/users/:userId', getUser)
  router.post('/users', createUser)
}
