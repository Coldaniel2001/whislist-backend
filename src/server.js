const express = require('express')
const cors = require('cors')

const todosRouters = require("./routes/todos.routes")
const usersRouters = require("./routes/users.routes")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/todos", todosRouters)
app.use("/users", usersRouters)

module.exports=app