//   function defaultResponseErrorHandler (err) {
//     let response ={
//       status: 422,
//       message: {},
//       data: null
//     }

//     response.message = err.message

//     return response
//   }

function mongooseResponseValidationErrorHandler (err) {
  const response = {
    message: {}
  }

  const val = []

  const keys = Object.keys(err.errors)
  for (const index in keys) {
    const key = keys[index]
    const props = Object.prototype.hasOwnProperty.call(err.errors[key], 'message')
    if (props) {
      val.push(err.errors[key].value)
    }
    response.message = key + ' ' + val[1] + ' ( @' + val[0] + ' ) ' + err.errors[key].message
  }

  return response
}

const errorHandlers = [mongooseResponseValidationErrorHandler]

const constructUserErrorResponse = (err) => {
  let response
  for (const handler in errorHandlers) {
    const handlerFn = errorHandlers[handler]

    if (typeof (handlerFn) === 'function') {
      response = handlerFn(err)
      if (response !== null) break
    }
  }

  return response
}

module.exports = {
  constructUserErrorResponse
}
