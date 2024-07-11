const jwt = require('jsonwebtoken')

exports.middleware = function (req, res, next) {
    const token = req.cookies['Authorization']
    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
