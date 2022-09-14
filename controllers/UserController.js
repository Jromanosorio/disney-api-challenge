const { Encrypt, Decrypt } = require('../helpers/Bcrypt')
const { User } = require('../models/User')

const LoginUser = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username: username } })
    const checked = await Decrypt(password, user.password)

    if (!checked){
        res.send({ msg: "El usuario o la contraseña son incorrectos" })
        return
    }

    res.send({ user })
}

const RegisterUser = async(req, res) => {
    const { username, password } = req.body
    const hashed = await Encrypt(password)
    
    try {
        const user = await User.create({
            username,
            password: hashed
        })
        res.send({user})
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: "No se pudo crear el usuario" })
    }

}

module.exports = {
    LoginUser,
    RegisterUser
}