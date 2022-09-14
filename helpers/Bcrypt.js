const bcrypt = require('bcrypt')

const Encrypt = async(password) => {
    const hashPassword = await bcrypt.hash(password, 10)
    return hashPassword
}

const Decrypt = async(password, hash) => {
    return bcrypt.compare(password, hash)
}

module.exports = {
    Encrypt,
    Decrypt
}