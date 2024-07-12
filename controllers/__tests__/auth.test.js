const request = require('supertest')
const app = require('../../app')

it('Add JWT token to response cookies', async () => {
    await request(app)
        .post('/auth')
        .expect('set-cookie', /Authorization=.+/)
})

it('Return 200 status code', async () => {
    await request(app).post('/auth').expect(200)
})
