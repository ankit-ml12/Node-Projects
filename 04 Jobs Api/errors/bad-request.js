const customAPIError = require('./custom-api')
const { StatusCodes } = require('http-status-codes')
class BadRequestError extends customAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError
