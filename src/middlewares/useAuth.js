const HttpStatus = require('http-status-codes')
const { AppError } = require('../models')

module.exports = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(HttpStatus.UNAUTHORIZED).json(AppError.create(HttpStatus.UNAUTHORIZED))
    return
  }

  next()
}
