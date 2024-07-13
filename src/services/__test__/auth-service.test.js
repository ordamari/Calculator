const httpMocks = require('node-mocks-http')
const { authPOST } = require('../auth-service')

jest.mock('../jwt-service', () => ({
    createToken: jest.fn(() => 'mockToken'),
}))

it('should set a cookie with the correct name, value, and options', () => {
    const mockRes = httpMocks.createResponse()
    mockRes.cookie = jest.fn()

    authPOST(mockRes)

    expect(mockRes.cookie).toHaveBeenCalledWith('Authorization', 'mockToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    })
})
