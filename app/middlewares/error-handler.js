function logErrors(err, req, res, next) {
  console.log('logErrors')
  console.error(err)
  next(err)
}

// Middleware de tipo error DEBE tener los 4 parámetros
function errorHandler(err, req, res, next) {
  console.log('errorHandler')
  res.status(500).send({ message: err.message, stack: err.stack })
}

module.exports = { logErrors, errorHandler }
