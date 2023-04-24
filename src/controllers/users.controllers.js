const UsersModels = require("../models/users.models")
const { encrypt, compare } = require('../encrypt/handleBcrypt')

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
        const passwordHash = await encrypt(password)
        const createUsers = await UsersModels.create({
            name,
            gmail,
            password: passwordHash
        })
        res.status(200).send({ status: 'OK', createUsers })
    } catch {
        res.status(500).send({ status: 'FALSE' })
    }
}

const verifyPasswod = async (req, res) => {
    const { gmail, password } = req.body;
    try {
        const user = await UsersModels.findOne({ gmail })

        if (!user) {
            res.status(200).send({ status: 'NOT FOUND', user })
        }else{
            const checkPassword = await compare(password, user.password)
            if (checkPassword) {
                res.status(200).send({ status: 'OK', user })
            }
        }
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { createUsers, getUsers, verifyPasswod }