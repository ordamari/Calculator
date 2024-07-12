const { NotAuthorizedError } = require('../errors/not-authorized.error')
const { checkToken } = require('../service/JWTService')

exports.requireAuth = function (req, res, next) {
    const token = req.cookies['Authorization']
    if (!token) throw new NotAuthorizedError()
    checkToken(token, next)
}
