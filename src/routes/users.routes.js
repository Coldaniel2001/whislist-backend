const express = require('express');

const router = express.Router()

const usersControllers = require('../controllers/users.controllers')

router.get("/",  usersControllers.getUsers)
router.post("/",  usersControllers.createUsers)
router.post("/login",  usersControllers.verifyPasswod)



module.exports = router;