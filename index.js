'use strict'

const path = require('path')
const http = require('http')
const dotenv = require('dotenv')
const oas3Tools = require('oas3-tools')
const { errorHandler } = require('./middlewares/error-handler.middleware')
const serverPort = 8080

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
app.use(errorHandler)

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log(
        'Your server is listening on port %d (http://localhost:%d)',
        serverPort,
        serverPort
    )
    console.log(
        'Swagger-ui is available on http://localhost:%d/docs',
        serverPort
    )
})
