const { calculatorPOST } = require('../calculator-service')

it('should add two numbers', () => {
    const body = {
        firstNumber: 1,
        secondNumber: 2,
    }
    const arithmeticOperation = 'add'
    const callback = jest.fn()

    calculatorPOST(body, arithmeticOperation, callback)

    expect(callback).toHaveBeenCalledWith({ result: 3 })
})

it('should subtract two numbers', () => {
    const body = {
        firstNumber: 1,
        secondNumber: 2,
    }
    const arithmeticOperation = 'subtract'
    const callback = jest.fn()

    calculatorPOST(body, arithmeticOperation, callback)

    expect(callback).toHaveBeenCalledWith({ result: -1 })
})

it('should multiply two numbers', () => {
    const body = {
        firstNumber: 1,
        secondNumber: 2,
    }
    const arithmeticOperation = 'multiply'

    const callback = jest.fn()

    calculatorPOST(body, arithmeticOperation, callback)

    expect(callback).toHaveBeenCalledWith({ result: 2 })
})

it('should divide two numbers', () => {
    const body = {
        firstNumber: 1,
        secondNumber: 2,
    }
    const arithmeticOperation = 'divide'
    const callback = jest.fn()

    calculatorPOST(body, arithmeticOperation, callback)

    expect(callback).toHaveBeenCalledWith({ result: 0.5 })
})

it('should throw an error when dividing by zero', () => {
    const body = {
        firstNumber: 1,
        secondNumber: 0,
    }
    const arithmeticOperation = 'divide'
    const callback = jest.fn()

    expect(() => calculatorPOST(body, arithmeticOperation, callback)).toThrow(
        'Cannot divide by zero'
    )
})

it('should throw an error when given an invalid arithmetic operation', () => {
    const body = {
        firstNumber: 1,
        secondNumber: 2,
    }
    const arithmeticOperation = 'invalid'
    const callback = jest.fn()

    expect(() => calculatorPOST(body, arithmeticOperation, callback)).toThrow(
        'Invalid arithmetic operation'
    )
})
