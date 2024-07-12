const http = require('http')
const app = require('./app')
const serverPort = 8080

const server = http.createServer(app)

server.listen(serverPort, function () {
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

module.exports = server
