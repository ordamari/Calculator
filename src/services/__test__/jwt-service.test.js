const { checkToken, createToken } = require('../jwt-service')

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(() => 'mockReturnValue'),
    verify: jest.fn((token, _, callback) => {
        if (token === 'invalid token') {
            callback('Invalid token')
        }
        callback(null, { mock: 'decodedToken' })
    }),
}))

describe('createToken', () => {
    it('should return a token', () => {
        const token = createToken()
        expect(token).toBe('mockReturnValue')
    })
})

describe('checkToken', () => {
    it('should return the decoded token', () => {
        const token = 'mockToken'
        const next = jest.fn()
        checkToken(token, next)
        expect(next).toHaveBeenCalledWith({ mock: 'decodedToken' })
    })

    it('should throw an error if the token is invalid', () => {
        const token = 'invalid token'
        expect(() => checkToken(token)).toThrow('Invalid token')
    })
})
