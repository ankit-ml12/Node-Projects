const customAPIError = require('./custom-api')
const BadRequestError = require('./bad-request')
const UnaunthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not-found')

module.exports = {
  customAPIError,
  BadRequestError,
  UnaunthenticatedError,
  NotFoundError,
}
