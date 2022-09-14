const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('Challenge', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
})

const ConnectDB = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log("Conectado a la base de datos")
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    sequelize, 
    ConnectDB
}