const HttpStatus = require('http-status-codes')

const { AppError } = require('../../models')

function validateGetUser(userId) {
  switch (userId) {
    case '0':
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        body: AppError.create(HttpStatus.INTERNAL_SERVER_ERROR),
      }
    case '-1':
      return {
        statusCode: HttpStatus.NOT_FOUND,
        body: AppError.create(AppError.USER_NOT_FOUND),
      }
    default:
      return false
  }
}

function validateCreateUser({ authorization, id }) {
  if (!authorization) {
    return {
      statusCode: HttpStatus.UNAUTHORIZED,
      body: AppError.create(HttpStatus.UNAUTHORIZED),
    }
  }

  if (!id) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: AppError.create(HttpStatus.BAD_REQUEST),
    }
  }

  return false
}

module.exports = {
  validateGetUser,
  validateCreateUser,
}
