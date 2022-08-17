const express = require('express');
const router = express.Router();

const Book2Controller = require("../controllers/BookController")
const AutherController = require("../controllers/AutherController")

router.post("/createBookList",  Book2Controller.createBookList)

router.post("/createAutherList",AutherController.createAutherList)



module.exports = router; 
