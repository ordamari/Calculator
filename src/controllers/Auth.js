'use strict'

const Auth = require('../services/auth-service')

module.exports.authPOST = function authPOST(req, res, next) {
    Auth.authPOST(res)
    res.sendStatus(200)
}
