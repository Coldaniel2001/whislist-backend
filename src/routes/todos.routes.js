const express = require('express');

const todosControllers = require("../controllers/todos.controllers")
const {deleteTodosOfUser} = require("../controllers/todos.controllers")

const router = express.Router()

router.get("/:userId",  todosControllers.getTodosOfUser)
router.post("/:userId",  todosControllers.createTodos)
router.put("/done:id", todosControllers.updateDoneTodos)
router.put("/:id", todosControllers.updateTodos)
router.delete("/:id",  todosControllers.deleteOneTodos)
router.delete("/",  todosControllers.deleteCompleted)

module.exports = router;