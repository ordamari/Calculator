'use strict'

const Auth = require('../service/AuthService')

module.exports.authPOST = function authPOST(req, res, next) {
    Auth.authPOST(res)
    res.sendStatus(200)
}
