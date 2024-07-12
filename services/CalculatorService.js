'use strict'

/**
 * perform arithmetic operations on two numbers
 *
 * body Object { firstNumber, secondNumber }
 * arithmeticOperation String arithmetic operation to be performed (add, subtract, multiply, divide)
 * returns Object { result }
 **/
exports.calculatorPOST = function (body, arithmeticOperation, callback) {
    const { firstNumber, secondNumber } = body
    switch (arithmeticOperation) {
        case 'add':
            callback({
                result: firstNumber + secondNumber,
            })
            break
        case 'subtract':
            callback({
                result: firstNumber - secondNumber,
            })
            break
        case 'multiply':
            callback({
                result: firstNumber * secondNumber,
            })
            break
        case 'divide':
            if (secondNumber === 0) throw new Error('Cannot divide by zero')
            callback({
                result: firstNumber / secondNumber,
            })
            break
        default:
            throw new Error('Invalid arithmetic operation')
    }
}
