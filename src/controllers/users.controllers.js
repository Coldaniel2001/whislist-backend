const UsersModels = require("../models/users.models")

const getUsers = async (req, res) => {
    try {
        const allUsers = await UsersModels.find({}).lean().exec()
        res.status(200).send({ status: 'OK', allUsers })
    } catch {
        res.status(500).send({ status: 'FALSE' })
    }
}

const createUsers = async (req, res) => {
    const { name, gmail, password } = req.body
    try {
        const createUsers = await UsersModels.create({
            name,
            gmail,
            password
        })
        res.status(200).send({ status: 'OK', createUsers })
    } catch {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { createUsers, getUsers }