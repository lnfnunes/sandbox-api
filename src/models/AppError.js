const HttpStatus = require('http-status-codes')

// Business Errors
const errorCodes = {}
errorCodes[(module.exports.USER_NOT_FOUND = '001')] = 'User Not Found!'
errorCodes[(module.exports.USER_EXISTING = '002')] = 'User already exists!'

const getMessageByCode = (code) => {
  return code === HttpStatus.INTERNAL_SERVER_ERROR
    ? HttpStatus.getStatusText(code)
    : errorCodes[code] || HttpStatus.getStatusText(code)
}

module.exports.create = (code = HttpStatus.INTERNAL_SERVER_ERROR) => ({
  code,
  message: getMessageByCode(code),
})
