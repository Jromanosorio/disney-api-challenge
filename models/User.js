const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../config/Connection')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false   
    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: true
})

module.exports = {
    User
}