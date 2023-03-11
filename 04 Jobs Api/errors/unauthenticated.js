const customAPIError = require('./custom-api')
const { StatusCodes } = require('http-status-codes')

class Unaunthenticated extends customAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = Unaunthenticated
