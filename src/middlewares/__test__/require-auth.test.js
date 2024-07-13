const httpMocks = require('node-mocks-http')
const { requireAuth } = require('../require-auth.middleware')

jest.mock('../../services/jwt-service', () => ({
    checkToken: jest.fn((token, next) => {
        if (token === 'invalid token') {
            throw new Error('Invalid token')
        }
        next({ mock: 'decodedToken' })
    }),
    createToken: jest.fn(() => 'mockReturnValue'),
}))

it('should call next with the decoded token', () => {
    const mockReq = httpMocks.createRequest()
    mockReq.cookies['Authorization'] = 'mockToken'
    const mockRes = httpMocks.createResponse()
    const mockNext = jest.fn()

    requireAuth(mockReq, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalledWith({ mock: 'decodedToken' })
})

it('should throw an error if dont have a token', () => {
    const mockReq = httpMocks.createRequest()
    const mockRes = httpMocks.createResponse()
    const mockNext = jest.fn()

    requireAuth(mockReq, mockRes, mockNext)

    expect(mockRes.statusCode).toBe(401)
})

it('should throw an error if the token is invalid', () => {
    const mockReq = httpMocks.createRequest()
    mockReq.cookies['Authorization'] = 'invalid token'
    const mockRes = httpMocks.createResponse()
    const mockNext = jest.fn()

    requireAuth(mockReq, mockRes, mockNext)
    expect(mockRes.statusCode).toBe(401)
})
