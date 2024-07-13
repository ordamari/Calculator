const jwt = require('jsonwebtoken')

/**
 * Check if the token is valid
 *
 * token String Token to be checked
 * returns Object user
 **/
exports.checkToken = function (token, next) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) throw new Error('Invalid token')
        next(user)
    })
}

/**
 * Create a token
 *
 * returns String token
 **/
exports.createToken = function (tokenData) {
    return jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}
