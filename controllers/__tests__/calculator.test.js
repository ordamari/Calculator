const request = require('supertest')
const app = require('../../app')
const jwt = require('jsonwebtoken')

it('401 when token is not added', async () => {
    await request(app)
        .post('/calculator')
        .set('Content-Type', 'application/json')
        .set('arithmeticoperation', 'add')
        .send({
            firstNumber: 1,
            secondNumber: 2,
        })
        .expect(401)
})

it('400 when wrong body', async () => {
    const token = jwt.sign({}, 'your_secret_key')

    await request(app)
        .post('/calculator')
        .set('Content-Type', 'application/json')
        .set('Cookie', [`Authorization=${token}`])
        .set('arithmeticoperation', 'add')
        .send({
            firstNumber: '1',
            secondNumber: 2,
        })
        .expect(400)
})

it('400 when wrong arithmeticoperation', async () => {
    const token = jwt.sign({}, 'your_secret_key')

    await request(app)
        .post('/calculator')
        .set('Content-Type', 'application/json')
        .set('arithmeticoperation', 'abb')
        .set('Cookie', [`Authorization=${token}`])
        .expect(400)
})

it('400 when divide by zero', async () => {
    const token = jwt.sign({}, 'your_secret_key')

    await request(app)
        .post('/calculator')
        .set('Content-Type', 'application/json')
        .set('arithmeticoperation', 'divide')
        .set('Cookie', [`Authorization=${token}`])
        .send({
            firstNumber: 1,
            secondNumber: 0,
        })
        .expect(400)
})

it('200 when have token, body include firstNumber and secondNumber as numbers, arithmeticoperation is one of:add, subtract, multiply, divide, and dont try to divide by zero', async () => {
    const token = jwt.sign({}, 'your_secret_key')

    await request(app)
        .post('/calculator')
        .set('Content-Type', 'application/json')
        .set('arithmeticoperation', 'divide')
        .set('Cookie', [`Authorization=${token}`])
        .send({
            firstNumber: 8,
            secondNumber: 3,
        })
        .expect(200)
})
