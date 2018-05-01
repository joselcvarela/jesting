const crypto = require('crypto')

class Helpers {
    get salt() {
        return 'its_NaCl'
    }

    hashWithSalt(text) {
        return crypto.createHmac('sha512', this.salt).update(text).digest("base64");
    }
}

module.exports = new Helpers()