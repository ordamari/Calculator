'use strict'

const utils = require('../utils/writer.js')
const Calculator = require('../service/CalculatorService')
const AuthenticateToken = require('../middlewares/authenticateToken.js')

module.exports.calculatorPOST = function calculatorPOST(req, res, next, body) {
    AuthenticateToken.middleware(req, res, () => {
        const arithmeticOperation = req.headers['arithmeticoperation']
        try {
            Calculator.calculatorPOST(body, arithmeticOperation, (response) => {
                utils.writeJson(res, response)
            })
        } catch (err) {
            utils.writeJson(res, { message: err.message }, 400)
        }
    })
}
