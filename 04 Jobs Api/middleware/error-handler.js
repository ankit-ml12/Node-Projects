const { customAPIError } = require('../errors')

const { StatusCode, StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log('err', err)
  let customError = {
    //set Default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again leter',
  }
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  console.log('err', err)
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${err.keyValue} field, Please choose another one`
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Something went wrong try again later')
  console.log(err.msg)
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
