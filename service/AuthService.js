'use strict'

const jwt = require('jsonwebtoken')

/**
 * add JWT token to yours cookie to perform authentication
 *
 * no response value expected for this operation
 **/
exports.authPOST = function (res) {
    const token = jwt.sign({ someData: 'data' }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
    res.cookie('Authorization', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    })
}
