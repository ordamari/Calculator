'use strict'

const { createToken } = require('./JWTService')

/**
 * add JWT token to yours cookie to perform authentication
 *
 * no response value expected for this operation
 **/
exports.authPOST = function (res) {
    const token = createToken({ someData: 'data' })
    res.cookie('Authorization', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    })
}
