const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middlewares/tokenverifyMW")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middleware.tokenverify, userController.getUserData)

router.put("/users/:userId", middleware.tokenverify, userController.updateUser)

router.delete("/users/:userId", middleware.tokenverify, userController.deleteUser)

module.exports = router;