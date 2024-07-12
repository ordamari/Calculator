const jwt = require('jsonwebtoken')
const { NotAuthorizedError } = require('../errors/not-authorized.error')

exports.checkToken = function (token, next) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) throw new NotAuthorizedError()
        next(user)
    })
}

exports.createToken = function (tokenData) {
    return jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
}
