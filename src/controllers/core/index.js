const HttpStatus = require('http-status-codes')

const { version } = require('../../../package.json')
const { AppError } = require('../../models')

const status = 'UP'

function getRoot(req, res) {
  res.status(HttpStatus.OK).json({
    status,
  })
}

function getInfo(req, res) {
  res.status(HttpStatus.OK).json({
    status,
    version,
  })
}

function get404(req, res) {
  const statusCode = HttpStatus.NOT_FOUND
  res.status(statusCode).json(AppError.create(statusCode))
}

module.exports = (router) => {
  router.get('/', getRoot)
  router.get('/info', getInfo)

  // This should be executed after all routes get registered
  setTimeout(() => router.all('*', get404), 0)
}
