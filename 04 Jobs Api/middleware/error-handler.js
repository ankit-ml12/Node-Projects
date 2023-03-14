const { customAPIError } = require('../errors')

const { StatusCode, StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    //set Default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again leter',
  }
  //don't need any more
  // if (err instanceof customAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }

  if (err.name == 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
    customError.statusCode = 400
  }
  if (err.name == 'CastError') {
    customError.msg = `No item found with id ${err.value}`
    customError.statusCode = 404
  }
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, Please choose another one`
    customError.statusCode = 404
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Something went wrong try again later')
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
