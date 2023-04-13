const { Schema, model } = require('mongoose')

const TodosShema = Schema({
    text: {
        type: String,
        required: [true, "The text is requerid"]
    },
    done: {
        type: Boolean,
        required: true
    }
})

const TodosModels = model("Todos", TodosShema)

module.exports = TodosModels