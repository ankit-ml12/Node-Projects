const customAPIError = require('./custom-api')
const { StatusCodes } = require('http-status-codes')
class NotFound extends customAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

module.exports = NotFound
