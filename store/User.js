const Helpers = require('../Helpers')

class User {
    constructor({ name = '', age = -1, email, password = '12345' }, store) {
        if (!email) throw Error('Invalid e-mail')
        this.name = name
        this.age = age
        this.email = email
        this.password = Helpers.hashWithSalt(password)
        this.store = store
    }

    save() {
        this.store.set(this.email, this)
    }

    get() {
        return this
    }
}

module.exports = User