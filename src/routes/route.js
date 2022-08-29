const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const AuthenticationMW = require("../middlewares/Authentication")
const AuthorisationMW = require("../middlewares/Authorisation")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", AuthenticationMW.tokenverify,AuthorisationMW.checkUser, userController.getUserData)

router.put("/users/:userId", AuthenticationMW.tokenverify,AuthorisationMW.checkUser, userController.updateUser)

router.delete("/users/:userId", AuthenticationMW.tokenverify,AuthorisationMW.checkUser, userController.deleteUser)

module.exports = router;