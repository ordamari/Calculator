'use strict'

const utils = require('../utils/writer.js')
const Calculator = require('../service/CalculatorService')
const { requireAuth } = require('../middlewares/require-auth.middleware.js')
const { BadRequestError } = require('../errors/bad-request.error.js')

function calculatorPOST(req, res, next, body) {
    const arithmeticOperation = req.headers['arithmeticoperation']
    try {
        Calculator.calculatorPOST(body, arithmeticOperation, (response) => {
            utils.writeJson(res, response)
        })
    } catch (err) {
        throw new BadRequestError(err.message)
    }
}

module.exports = {
    calculatorPOST: function (req, res, next, body) {
        requireAuth(req, res, calculatorPOST.bind(null, req, res, next, body))
    },
}
