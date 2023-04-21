const { Schema, model } = require('mongoose')

const UsersShema = Schema({
    name: {
        type: String,
        required: [true, "The text is requerid"]
    },
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const UsersModels = model("Users", UsersShema)

module.exports = UsersModels