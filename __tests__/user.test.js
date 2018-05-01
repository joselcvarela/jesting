const { User, store } = require('../store')
const Helpers = require('../Helpers')

describe('should save user', () => {
    const name = 'John Doe'
    const age = 28
    const email = 'john@doe.com'
    const password = '12345'
    const u = new User({ name, age, email }, store)
    u.save()

    it('user name should be John Doe', () => {
        const savedUser = store[email]
        expect(savedUser.name).toBe(name)
    })

    it('user age should be 28', () => {
        const savedUser = store[email]
        expect(savedUser.age).toBe(28)
    })

    it('user password should be salted', () => {
        const savedUser = store[email]
        const hashedPassword = Helpers.hashWithSalt(password)
        expect(savedUser.password).toBe(hashedPassword)
    })
})