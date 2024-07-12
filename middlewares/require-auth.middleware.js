const { checkToken } = require('../services/JWTService')

exports.requireAuth = function (req, res, next) {
    try {
        const token = req.cookies['Authorization']
        if (!token) throw new Error('No token provided')
        checkToken(token, next)
    } catch (err) {
        res.status(401).send({ message: err.message })
    }
}
