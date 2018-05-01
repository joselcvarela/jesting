class Store {
    set(key, value) {
        this[key] = value
    }

    get(key) {
        return this[key]
    }
}

module.exports = Store