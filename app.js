const { RegisterUser, LoginUser } = require('./controllers/UserController')
const express = require('express')
const { ConnectDB } = require('./config/Connection')
const app = express()

const port = process.env.PORT || 3000

ConnectDB()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.post('/auth/register', RegisterUser)
app.post('/auth/login', LoginUser)

app.listen(port, () => {
    console.log("Server running on port: ", port)
})