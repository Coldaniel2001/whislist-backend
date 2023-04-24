const TodosModels = require('../models/todos.models')
const UsersModels = require('../models/users.models')


const createTodos = async (req, res) => {
    const { text, done } = req.body
    const { userId } = req.params
    // if (!text || !done) res.status(400).send()
    try {
        const createTodos = await TodosModels.create({
            text,
            done
        })
        const user = await UsersModels.findById(userId)

        user.todos.push(createTodos._id)
        await user.save()

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

        res.status(200).send({ status: 'OK', todo })
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

const deleteCompleted = async (req, res) => {

    try {
        // const deleteTodos = await TodosModels.findOneAndDelete({ _id: id })
        const findTodos = await TodosModels.deleteMany({done:true})
        
        res.status(200).send({ status: 'OK', msg: `Deleted completed todos` })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

const getTodosOfUser = async (req, res) => {

    const { userId } = req.params

    try {
        const user = await UsersModels.findById(userId).populate("todos")
        res.status(200).send({ status: 'OK', user })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = {
    deleteOneTodos,
    deleteCompleted,
    createTodos,
    updateDoneTodos,
    updateTodos,
    getTodosOfUser
}