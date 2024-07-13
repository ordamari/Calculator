const app = require('../app')

beforeAll(async () => {
    process.env.JWT_SECRET = 'your_secret_key'
    process.env.JWT_EXPIRES_IN = '1d'
})

beforeEach(async () => {
    jest.clearAllMocks()
})
