const { CustomError } = require('../errors/custom.error')

exports.errorHandler = errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res
            .statusCode(err.statusCode ?? 500)
            .send({ errors: err.serializeErrors() })
    }
    console.error(err)
    res.statusCode(400).send({
        errors: [{ message: err.message }],
    })
}
