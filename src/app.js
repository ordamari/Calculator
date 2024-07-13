'use strict'

const path = require('path')
const dotenv = require('dotenv')
const oas3Tools = require('oas3-tools')

dotenv.config()

// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers'),
    },
}

const expressAppConfig = oas3Tools.expressAppConfig(
    path.join(__dirname, 'api/openapi.yaml'),
    options
)
const app = expressAppConfig.getApp()

module.exports = app
