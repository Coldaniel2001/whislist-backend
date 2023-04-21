const express = require('express');

const todosControllers = require("../controllers/todos.controllers")

const router = express.Router()


router.get("/",  todosControllers.getAllTodos)
router.post("/",  todosControllers.createTodos)
router.put("/done:id", todosControllers.updateDoneTodos)
router.put("/:id", todosControllers.updateTodos)
router.delete("/:id",  todosControllers.deleteOneTodos)

module.exports = router;