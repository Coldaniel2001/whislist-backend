const express = require('express')
const cors = require('cors')

const todosRouters = require("./routes/todos.routes")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/todos", todosRouters)

module.exports=app