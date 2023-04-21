const TodosModels = require('../models/todos.models')

const getAllTodos = async (req, res) => {

    try {
        const allTodos = await TodosModels.find({})
        res.status(200).send({ status: 'OK', allTodos })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const createTodos = async (req, res) => {
    const { text, done } = req.body
    // if (!text || !done) res.status(400).send()

    try {
        const createTodos = await TodosModels.create({
            text,
            done
        })
        res.status(200).send({ status: 'OK', createTodos })
    } catch {
        res.status(500).send({ status: 'FALSE' })
    }
}

const updateDoneTodos = async (req, res) => {
    const { done } = req.body
    const { id } = req.params

    if (!id) res.status(400).send()

    try {
        const todo = await TodosModels.findById(id)
        todo.done = done

        await todo.save()

        res.status(200).send({ status: 'OK' })
    } catch {
        res.status(500).send({ status: 'FALSE' })
    }
}

const updateTodos = async (req, res) => {
    const { text } = req.body
    const { id } = req.params

    if (!id) res.status(400).send()

    try {
        const todo = await TodosModels.findById(id)
        todo.text = text

        await todo.save()

        res.status(200).send({ status: 'OK' })
    } catch {
        res.status(500).send({ status: 'FALSE' })
    }
}

const deleteOneTodos = async (req, res) => {
    const { id } = req.params

    if (!id) res.status(400).send()

    try {
        const deleteTodos = await TodosModels.findOneAndDelete({ _id: id })
        res.status(200).send({ status: 'OK', msg: `Deleted album with id ${id}` })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = {
    getAllTodos,
    deleteOneTodos,
    createTodos,
    updateDoneTodos,
    updateTodos
}