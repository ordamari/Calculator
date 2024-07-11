const jwt = require('jsonwebtoken')

exports.checkToken = function (token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) reject(err)
            resolve(user)
        })
    })
}
